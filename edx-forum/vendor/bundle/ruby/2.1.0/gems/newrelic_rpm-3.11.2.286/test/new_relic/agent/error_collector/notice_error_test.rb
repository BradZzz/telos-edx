# encoding: utf-8
# This file is distributed under New Relic's license terms.
# See https://github.com/newrelic/rpm/blob/master/LICENSE for complete details.

require File.expand_path(File.join(File.dirname(__FILE__),'..','..','..','test_helper'))
class NewRelic::Agent::ErrorCollector::NoticeErrorTest < Minitest::Test
  require 'new_relic/agent/error_collector'
  include NewRelic::Agent::ErrorCollector::NoticeError

  def test_error_params_from_options_mocked
    options = {:initial => 'options'}
    self.expects(:uri_ref_and_root).returns({:hi => 'there', :hello => 'bad'})
    self.expects(:normalized_request_and_custom_params).with({:initial => 'options'}).returns({:hello => 'world'})
    assert_equal({:hi => 'there', :hello => 'world'}, error_params_from_options(options))
  end

  module Winner
    def winner
      'yay'
    end
  end

  def test_sense_method
    object = Object.new
    object.extend(Winner)
    assert !sense_method(object, 'blab')
    assert_equal 'yay', sense_method(object, 'winner')
  end

  def test_fetch_from_options
    options = {:hello => 'world'}
    assert_equal 'world', fetch_from_options(options, :hello, '')
    assert_equal '', fetch_from_options(options, :none, '')
    assert_equal({}, options)
  end

  def test_uri_ref_and_root_default
    fake_control = mocked_control
    fake_control.expects(:root).returns('rootbeer')
    options = {}
    assert_equal({:request_referer => '', :rails_root => 'rootbeer', :request_uri => ''}, uri_ref_and_root(options))
  end

  def test_uri_ref_and_root_values
    fake_control = mocked_control
    fake_control.expects(:root).returns('rootbeer')
    options = {:uri => 'whee', :referer => 'bang'}
    assert_equal({:request_referer => 'bang', :rails_root => 'rootbeer', :request_uri => 'whee'}, uri_ref_and_root(options))
  end

  def test_custom_params_from_opts_base
    assert_equal({}, custom_params_from_opts({}))
  end

  def test_custom_params_from_opts_custom_params
    assert_equal({:foo => 'bar'}, custom_params_from_opts({:custom_params => {:foo => 'bar'}}))
  end

  def test_custom_params_from_opts_merged_params
    assert_equal({:foo => 'baz'}, custom_params_from_opts({:custom_params => {:foo => 'bar'}, :foo => 'baz'}))
  end

  def test_request_params_from_opts_positive
    with_config(:capture_params => true) do
      val = {:request_params => 'foo'}
      assert_equal('foo', request_params_from_opts(val))
      assert_equal({}, val, "should delete request_params key from hash")
    end
  end

  def test_request_params_from_opts_negative
    with_config(:capture_params => false) do
      val = {:request_params => 'foo'}
      assert_equal(nil, request_params_from_opts(val))
      assert_equal({}, val, "should delete request_params key from hash")
    end
  end

  def test_normalized_request_and_custom_params_base
    self.expects(:normalize_params).with(nil).returns(nil)
    self.expects(:normalize_params).with({}).returns({})
    with_config(:capture_params => true) do
      assert_equal({:request_params => nil, :custom_params => {}},
                   normalized_request_and_custom_params({}))
    end
  end

  def test_extract_stack_trace
    exception = mock('exception')
    self.expects(:sense_method).with(exception, 'original_exception')
    self.expects(:sense_method).with(exception, 'backtrace')
    assert_equal('<no stack trace>', extract_stack_trace(exception))
  end

  def test_extract_stack_trace_positive
    orig = mock('original')
    exception = mock('exception')
    self.expects(:sense_method).with(exception, 'original_exception').returns(orig)
    self.expects(:sense_method).with(orig, 'backtrace').returns('STACK STACK STACK')
    assert_equal('STACK STACK STACK', extract_stack_trace(exception))
  end

  def test_over_queue_limit_negative
    @errors = []
    assert !over_queue_limit?(nil)
  end

  def test_over_queue_limit_positive
    @errors = (1..21).map{|_| NewRelic::NoticedError.new("", {}, nil)}
    expects_logging(:warn, includes('The error reporting queue has reached 20'))
    assert over_queue_limit?('hooray')
  end

  def test_exception_info
    exception = mock('exception')
    self.expects(:sense_method).with(exception, 'file_name').returns('file_name')
    self.expects(:sense_method).with(exception, 'line_number').returns('line_number')
    self.expects(:extract_stack_trace).with(exception).returns('stack_trace')
    assert_equal({:file_name => 'file_name', :line_number => 'line_number', :stack_trace => 'stack_trace'},
                 exception_info(exception))
  end

  def test_add_to_error_queue_positive
    noticed_error = mock('noticed_error')
    noticed_error.expects(:message).returns('a message')
    @lock = Mutex.new
    @errors = []
    self.expects(:over_queue_limit?).with('a message').returns(false)
    add_to_error_queue(noticed_error)
    assert_equal([noticed_error], @errors)
  end

  def test_add_to_error_queue_negative
    noticed_error = mock('noticed_error')
    noticed_error.expects(:message).returns('a message')
    @lock = Mutex.new
    @errors = []
    self.expects(:over_queue_limit?).with('a message').returns(true)
    add_to_error_queue(noticed_error)
    assert_equal([], @errors)
  end

  def test_skip_notice_error_is_true_if_the_error_collector_is_disabled
    error = mocked_error
    with_error_collector_config(:'error_collector.enabled' => false) do |error_collector|
      assert error_collector.skip_notice_error?(NewRelic::Agent::TransactionState.tl_get, error)
    end
  end

  def test_skip_notice_error_is_true_if_the_error_is_nil
    error = nil
    with_error_collector_config(:'error_collector.enabled' => true) do |error_collector|
      error_collector.expects(:error_is_ignored?).with(error).returns(false)
      assert error_collector.skip_notice_error?(NewRelic::Agent::TransactionState.tl_get, error)
    end
  end

  def test_skip_notice_error_is_true_if_the_error_is_ignored
    error = mocked_error
    with_error_collector_config(:'error_collector.enabled' => true) do |error_collector|
      error_collector.expects(:error_is_ignored?).with(error).returns(true)
      assert error_collector.skip_notice_error?(NewRelic::Agent::TransactionState.tl_get, error)
    end
  end

  def test_skip_notice_error_returns_false_for_non_nil_unignored_errors_with_an_enabled_error_collector
    error = mocked_error
    with_error_collector_config(:'error_collector.enabled' => true) do |error_collector|
      error_collector.expects(:error_is_ignored?).with(error).returns(false)
      assert !error_collector.skip_notice_error?(NewRelic::Agent::TransactionState.tl_get, error)
    end
  end

  def test_filtered_error_positive
    with_error_collector_config(:'error_collector.ignore_errors' => 'an_error') do |error_collector|
      error = mocked_error
      error_class = mock('error class')
      error.expects(:class).returns(error_class)
      error_class.expects(:name).returns('an_error')
      assert error_collector.filtered_error?(error)
    end
  end

  def test_filtered_error_negative
    error = mocked_error
    error_class = mock('error class')
    error.expects(:class).returns(error_class)
    error_class.expects(:name).returns('an_error')
    assert !NewRelic::Agent::ErrorCollector.new.filtered_error?(error)
  end

  def test_filtered_by_error_filter_empty
    # should return right away when there's no filter
    assert !filtered_by_error_filter?(nil)
  end

  def test_filtered_by_error_filter_positive
    error = mocked_error
    self.class.class_eval do
      define_method(:ignore_filter_proc) do |e|
        assert_equal(error, e)
        false
      end
    end
    assert filtered_by_error_filter?(error)
  ensure
    self.class.class_eval { undef :ignore_filter_proc }
  end

  def test_filtered_by_error_filter_negative
    error = mocked_error
    self.class.class_eval do
      define_method(:ignore_filter_proc) do |e|
        assert_equal(error, e)
        true
      end
    end
    assert !filtered_by_error_filter?(error)
  ensure
    self.class.class_eval { undef :ignore_filter_proc }
  end

  def test_error_is_ignored_positive
    error = mocked_error
    self.expects(:filtered_error?).with(error).returns(true)
    assert error_is_ignored?(error)
  end

  def test_error_is_ignored_negative
    error = mocked_error
    self.expects(:filtered_error?).with(error).returns(false)
    assert !error_is_ignored?(error)
  end

  def test_error_is_ignored_no_error
    assert !error_is_ignored?(nil), 'should not ignore nil'
  end

  private

  def mocked_error
    mock('error')
  end

  def mocked_control
    fake_control = mock('control')
    NewRelic::Control.stubs(:instance).returns(fake_control)
    fake_control
  end

  def with_error_collector_config(config)
    with_config(config) do
      yield NewRelic::Agent::ErrorCollector.new
    end
  end

  def ignore_error_filter
    @ignore_filter
  end

end
