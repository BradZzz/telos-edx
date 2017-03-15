# Patch the xml libs before anything else.
from safe_lxml import defuse_xml_libs
defuse_xml_libs()

# Disable PyContract contract checking when running as a webserver
import contracts
contracts.disable_all()

import openedx.core.operations
openedx.core.operations.install_memory_dumper()

import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "cms.envs.aws")
os.environ.setdefault("SERVICE_VARIANT", "cms")
os.chdir('/opt/bitnami/apps/edx/edx-platform')
os.environ.setdefault("MYSQL_UNIX_PORT", "/opt/bitnami/mysql/tmp/mysql.sock")
os.environ.setdefault("BOTO_CONFIG", "")
os.environ.setdefault("CONFIG_ROOT", "/opt/bitnami/apps/edx/conf")
os.environ.setdefault("TMPDIR", "/opt/bitnami/.tmp/")

import cms.startup as startup
startup.run()

# This application object is used by the development server
# as well as any WSGI server configured to use this file.
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
