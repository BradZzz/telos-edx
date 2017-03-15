(function(){RequireJS.define("js/financial-assistance/models/financial_assistance_model",["backbone"],function(e){var t=e.Model.extend({initialize:function(e){this.url=e.url}});return t})}).call(this,define||RequireJS.define),function(){RequireJS.define("common/js/utils/edx.utils.validate",["jquery","underscore","underscore.string","gettext"],function(e,t,n,i){var s;return t.mixin(n.exports()),s=function(){var n={validate:{template:t.template("<li><%= content %></li>"),msg:{email:i("The email address you've provided isn't formatted correctly."),min:i("%(field)s must have at least %(count)d characters."),max:i("%(field)s can only contain up to %(count)d characters."),required:i("Please enter your %(field)s.")},field:function(t){var i=e(t),s=!0,r=!0,a=!0,o=!0,l={},d=n.validate.isBlank(i);return n.validate.isRequired(i)?d?s=!1:(r=n.validate.str.minlength(i),a=n.validate.str.maxlength(i),o=n.validate.email.valid(i)):d||(r=n.validate.str.minlength(i),a=n.validate.str.maxlength(i),o=n.validate.email.valid(i)),l.isValid=s&&r&&a&&o,l.isValid||(n.validate.removeDefault(i),l.message=n.validate.getMessage(i,{required:s,min:r,max:a,email:o})),l},str:{minlength:function(e){var t=e.attr("minlength")||0;return t<=e.val().length},maxlength:function(e){var t=e.attr("maxlength")||!1;return t?t>=e.val().length:!0}},isRequired:function(e){return e.attr("required")},isBlank:function(e){var t,n=e.attr("type");return t="checkbox"===n?!e.prop("checked"):"select"===n?e.data("isdefault")===!0:!e.val()},email:{regex:new RegExp(["(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*",'|^"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-\\011\\013\\014\\016-\\177])*"',")@((?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\\.)+[A-Z]{2,6}\\.?$)","|\\[(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)(\\.(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)){3}\\]$"].join(""),"i"),valid:function(e){return"email"===e.attr("type")?n.validate.email.format(e.val()):!0},format:function(e){return n.validate.email.regex.test(e)}},getLabel:function(t){return e("label[for="+t+"]").text().split("*")[0].trim()},getMessage:function(e,i){var s,r,a,o,l=[];return t.each(i,function(i,d){i||(s=n.validate.getLabel(e.attr("id")),o=e.data("errormsg-"+d)||!1,o?a=o:(r={field:s},"min"===d?r.count=parseInt(e.attr("minlength"),10):"max"===d&&(r.count=parseInt(e.attr("maxlength"),10)),a=t.sprintf(n.validate.msg[d],r)),l.push(n.validate.template({content:a})))}),l.join(" ")},removeDefault:function(e){e.setCustomValidity&&e.setCustomValidity(" ")}}};return{validate:n.validate.field}}()})}.call(this,define||RequireJS.define),function(){RequireJS.define("js/student_account/views/FormView",["jquery","underscore","backbone","common/js/utils/edx.utils.validate"],function(e,t,n,i){return n.View.extend({tagName:"form",el:"",tpl:"",fieldTpl:"#form_field-tpl",events:{},errors:[],formType:"",$form:{},fields:[],requiredStr:"*",submitButton:"",initialize:function(t){this.model=t.model,this.preRender(t),this.tpl=e(this.tpl).html(),this.fieldTpl=e(this.fieldTpl).html(),this.buildForm(t.fields),this.listenTo(this.model,"error",this.saveError)},preRender:function(e){return e},render:function(n){var i=n||"";return e(this.el).html(t.template(this.tpl)({fields:i})),this.postRender(),this},postRender:function(){var t=e(this.el);this.$form=t.find("form"),this.$errors=t.find(".submission-error"),this.$submitButton=t.find(this.submitButton)},buildForm:function(n){var i,s=[],r=n.length,a=this.fieldTpl;for(this.fields=n,i=0;r>i;i++)n[i].errorMessages&&(n[i].errorMessages=this.escapeStrings(n[i].errorMessages)),s.push(t.template(a)(e.extend(n[i],{form:this.formType,requiredStr:this.requiredStr})));this.render(s.join(""))},element:{hide:function(e){e&&e.addClass("hidden")},scrollTop:function(t){e("html,body").animate({scrollTop:t.offset().top},"slow")},show:function(e){e&&e.removeClass("hidden")}},escapeStrings:function(e){return t.each(e,function(n,i){e[i]=t.escape(n)}),e},focusFirstError:function(){var e=this.$form.find(".error").first(),t={},n={};e.is("label")?(n=e.parent(".form-field"),e=n.find("input")||n.find("select")):t=e,e.focus()},forgotPassword:function(e){e.preventDefault(),this.trigger("password-help")},getFormData:function(){var n,i,s,r={},a=this.$form,o=a[0].elements,l=o.length,d="",u=[],c={};for(n=0;l>n;n++)i=e(o[n]),s=a.find("label[for="+i.attr("id")+"]"),d=i.attr("name")||!1,d&&(c=this.validate(o[n]),c.isValid?(r[d]="checkbox"===i.attr("type")?i.is(":checked"):i.val(),i.removeClass("error"),s.removeClass("error")):(u.push(c.message),i.addClass("error"),s.addClass("error")));return this.errors=t.uniq(u),r},saveError:function(e){this.errors=["<li>"+e.responseText+"</li>"],this.setErrors(),this.toggleDisableButton(!1)},setErrors:function(){var t,n=this.$errors.find(".message-copy"),i=[],s=this.errors,r=s.length;for(t=0;r>t;t++)i.push(s[t]);n.html(i.join("")),this.element.show(this.$errors),e("html,body").animate({scrollTop:this.$errors.offset().top},"slow"),this.focusFirstError()},setExtraData:function(e){return e},submitForm:function(e){var n=this.getFormData();t.isUndefined(e)||e.preventDefault(),this.toggleDisableButton(!0),t.compact(this.errors).length?this.toggleErrorMsg(!0):(n=this.setExtraData(n),this.model.set(n),this.model.save(),this.toggleErrorMsg(!1)),this.postFormSubmission()},postFormSubmission:function(){return!0},toggleErrorMsg:function(e){e?(this.setErrors(),this.toggleDisableButton(!1)):this.element.hide(this.$errors)},toggleDisableButton:function(e){this.$submitButton&&this.$submitButton.attr("disabled",e)},validate:function(e){return i.validate(e)}})})}.call(this,define||RequireJS.define),RequireJS.define("text",{load:function(e){throw new Error("Dynamic load not allowed: "+e)}}),RequireJS.define("text!templates/financial-assistance/financial_assessment_form.underscore",[],function(){return'<h1><%- gettext(\'Financial Assistance Application\') %></h1>\n\n<div class="intro">\n  <% _.each(header_text, function(copy) { %>\n	<p class="copy"><%- copy %></p>\n  <%  }); %>\n</div>\n\n<form class="financial-assistance-form">\n	<div class="status submission-error hidden" aria-live="polite">\n	    <h4 class="message-title"><%- gettext(\'Unable to submit application\') %></h4>\n	    <ul class="message-copy"></ul>\n	</div>\n\n	<div class="user-info">\n		<h2><%- gettext(\'About You\') %></h2>\n		<p><%- interpolate_text(\n			gettext(\'The following information is already a part of your {platform} profile. We\\\'ve included it here for your application.\'),\n			{platform: platform_name} \n		) %></p>\n		<div class="info-column">\n			<div class="title"><%- gettext(\'Username\') %></div>\n			<div class="data"><%- username %></div>\n		</div>\n		<div class="info-column">\n			<div class="title"><%- gettext(\'Email address\') %></div>\n			<div class="data"><%- email %></div>\n		</div>\n		<div class="info-column">\n			<div class="title"><%- gettext(\'Legal name\') %></div>\n			<div class="data"><%- name %></div>\n		</div>\n		<div class="info-column">\n			<div id="user-country-title" class="title"><%- gettext(\'Country of residence\') %></div>\n			<div class="data"><%- country %></div>\n		</div>\n	</div>\n\n	<%= fields %>\n\n	<div class="cta-wrapper clearfix">\n		<a href="<%- student_faq_url %>" class="nav-link"><%- interpolate_text(\n			gettext(\'Back to {platform} FAQs\'),\n    		{platform: platform_name}\n    	) %></a>\n		<button type="submit" class="action action-primary action-update js-submit-form submit-form"><%- gettext("Submit Application") %></button>\n	</div>\n</form>\n'}),RequireJS.define("text!templates/financial-assistance/financial_assessment_submitted.underscore",[],function(){return'<h1><%- gettext(\'Financial Assistance Application\') %></h1>\n<p class="js-success-message success-message" tabindex="-1"><%- interpolate_text(\n        gettext(\'Thank you for submitting your financial assistance application for {course_name}! You can expect a response in 2-4 business days.\'), {course_name: course}\n    ) %>\n</p>\n<div class="cta-wrapper clearfix">\n	<a href="<%- dashboard_url %>" class="btn btn-blue btn-dashboard"><%- gettext(\'Go to Dashboard\') %></a>\n</div>\n'}),RequireJS.define("text!templates/student_account/form_field.underscore",[],function(){return'<div class="form-field <%=type%>-<%= name %>">\n    <% if ( type !== \'checkbox\' ) { %>\n        <label for="<%= form %>-<%= name %>">\n            <%= label %>\n            <% if ( required && requiredStr ) { %> <%= requiredStr %></label><% } %>\n        </label>\n    <% } %>\n\n    <% if ( type === \'select\' ) { %>\n        <select id="<%= form %>-<%= name %>"\n            name="<%= name %>"\n            class="input-inline"\n            aria-describedby="<%= form %>-<%= name %>-desc"\n            <% if ( typeof errorMessages !== \'undefined\' ) {\n                _.each(errorMessages, function( msg, type ) {%>\n                    data-errormsg-<%= type %>="<%= msg %>"\n            <%  });\n            } %>\n            <% if ( required ) { %> aria-required="true" required<% } %>>\n        <% _.each(options, function(el) { %>\n            <option value="<%= el.value%>"<% if ( el.default ) { %> data-isdefault="true"<% } %>><%= el.name %></option>\n        <% }); %>\n        </select>\n        <% if ( instructions ) { %> <span class="tip tip-input" id="<%= form %>-<%= name %>-desc"><%= instructions %></span><% } %>\n    <% } else if ( type === \'textarea\' ) { %>\n        <textarea id="<%= form %>-<%= name %>"\n            type="<%= type %>"\n            name="<%= name %>"\n            class="input-block"\n            aria-describedby="<%= form %>-<%= name %>-desc"\n            <% if ( restrictions.min_length ) { %> minlength="<%= restrictions.min_length %>"<% } %>\n            <% if ( restrictions.max_length ) { %> maxlength="<%= restrictions.max_length %>"<% } %>\n            <% if ( typeof errorMessages !== \'undefined\' ) {\n                _.each(errorMessages, function( msg, type ) {%>\n                    data-errormsg-<%= type %>="<%= msg %>"\n            <%  });\n            } %>\n            <% if ( required ) { %> aria-required="true" required<% } %> ></textarea>\n            <% if ( instructions ) { %> <span class="tip tip-input" id="<%= form %>-<%= name %>-desc"><%= instructions %></span><% } %>\n    <% } else { %>\n        <input id="<%= form %>-<%= name %>"\n           type="<%= type %>"\n           name="<%= name %>"\n           class="input-block <% if ( type === \'checkbox\' ) { %>checkbox<% } %>"\n            <% if ( type !== \'password\' ) { %> aria-describedby="<%= form %>-<%= name %>-desc" <% } %>\n            <% if ( restrictions.min_length ) { %> minlength="<%= restrictions.min_length %>"<% } %>\n            <% if ( restrictions.max_length ) { %> maxlength="<%= restrictions.max_length %>"<% } %>\n            <% if ( required ) { %> aria-required="true" required<% } %>\n            <% if ( typeof errorMessages !== \'undefined\' ) {\n                _.each(errorMessages, function( msg, type ) {%>\n                    data-errormsg-<%= type %>="<%= msg %>"\n            <%  });\n            } %>\n            <% if ( placeholder ) { %> placeholder="<%= placeholder %>"<% } %>\n            value="<%- defaultValue %>"\n        />\n        <% if ( type === \'checkbox\' ) { %>\n            <label for="<%= form %>-<%= name %>">\n                <%= label %>\n                <% if ( required && requiredStr ) { %> <%= requiredStr %><% } %>\n            </label>\n        <% } %>\n        <% if ( instructions ) { %> <span class="tip tip-input" id="<%= form %>-<%= name %>-desc"><%= instructions %></span><% } %>\n    <% } %>\n\n    <% if( form === \'login\' && name === \'password\' ) { %>\n        <a href="#" class="forgot-password field-link"><%- gettext("Forgot password?") %></a>\n    <% } %>\n</div>\n'}),function(e){var t=function(t,n,i,s){var r=1===i?t:n;return e.template(r,{interpolate:/\{(.+?)\}/g})(s)};this.interpolate_ntext=t;var n=function(t,n){return e.template(t,{interpolate:/\{(.+?)\}/g})(n)};this.interpolate_text=n}.call(this,_),RequireJS.define("string_utils",["underscore"],function(e){return function(){var t;return t||e.interpolate_text}}(this)),function(){RequireJS.define("js/financial-assistance/views/financial_assistance_form_view",["backbone","jquery","underscore","gettext","js/financial-assistance/models/financial_assistance_model","js/student_account/views/FormView","text!../../../templates/financial-assistance/financial_assessment_form.underscore","text!../../../templates/financial-assistance/financial_assessment_submitted.underscore","text!templates/student_account/form_field.underscore","string_utils"],function(e,t,n,i,s,r,a,o,l){return r.extend({el:".financial-assistance-wrapper",events:{"click .js-submit-form":"submitForm"},tpl:a,fieldTpl:l,formType:"financial-assistance",requiredStr:"",submitButton:".js-submit-form",initialize:function(e){var t=e.context,n=t.fields;n[0].options.length>1&&n[0].options.unshift({name:"- "+i("Choose one")+" -",value:"","default":!0}),this.context={dashboard_url:t.dashboard_url,header_text:t.header_text,platform_name:t.platform_name,student_faq_url:t.student_faq_url,account_settings_url:t.account_settings_url},this.user_details=t.user_details,this.model=new s({url:t.submit_url}),this.model.set(t.user_details),this.listenTo(this.model,"error",this.saveError),this.model.on("sync",this.renderSuccess,this),this.buildForm(n)},render:function(e){var t=n.extend(this.model.toJSON(),this.context,{fields:e||""});return this.$el.html(n.template(this.tpl)(t)),this.postRender(),this.validateCountry(),this},renderSuccess:function(){this.$el.html(n.template(o)({course:this.model.get("course"),dashboard_url:this.context.dashboard_url})),t(".js-success-message").focus()},saveError:function(e){var t=["An error has occurred. Wait a few minutes and then try to submit the application again.","If you continue to have issues please contact support."],n=i(t.join(" "));0===e.status&&(n=i("An error has occurred. Check your Internet connection and try again.")),this.errors=["<li>"+n+"</li>"],this.setErrors(),this.element.hide(this.$resetSuccess),this.toggleDisableButton(!1)},setExtraData:function(e){return n.extend(e,this.user_details)},validateCountry:function(){var e=t(".submission-error"),n=e.find(".message-copy"),s=t("#user-country-title"),r=["Please go to your {link_start}profile page{link_end} ","and provide your country of residence."],a=window.interpolate_text(i(r.join("")),{link_start:'<a href="'+this.context.account_settings_url+'">',link_end:"</a>"});this.model.get("country")||(s.addClass("error"),n.append("<li>"+a+"</li>"),this.toggleDisableButton(!0),e.removeClass("hidden"))}})})}.call(this,define||RequireJS.define),function(){RequireJS.define("js/financial-assistance/financial_assistance_form_factory",["js/financial-assistance/views/financial_assistance_form_view"],function(e){return function(t){var n=new e({el:".financial-assistance-wrapper",context:t});return n}})}.call(this,define||RequireJS.define);