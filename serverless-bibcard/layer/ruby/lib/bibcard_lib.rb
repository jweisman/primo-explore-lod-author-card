# Support bibcard which is installed from Git
# Other attempts to use $BUNDLE_PATH did not work
gems = File.expand_path('../gems/2.7.0', __dir__)
load_paths = Dir[gems + "/bundler/gems/**/lib"]
$LOAD_PATH.unshift(*load_paths)

require 'bib_card'