# Support bibcard which is installed from Github
load_paths = Dir["/opt/ruby/gems/2.7.0/bundler/gems/**/lib"]
$LOAD_PATH.unshift(*load_paths)

#require 'bundler'
#Bundler.setup
require 'bib_card'

def lambda_handler(event:, context:)
  puts event
  begin
    uri = event["uri"] || event["queryStringParameters"]["uri"]
    raise "No URI provided" if !uri
    person = transform_person(BibCard.person(uri))
    { statusCode: 200, body: JSON.generate(person), headers: { "Cache-Control": "public, max-age=300", "Content-Type": "application/json" } }
  rescue => e
    { statusCode: 400, body: JSON.generate(e.message) }
  end
end

def transform_person(person)
  obj = {
    :name => person.name(["en", "en-US"]),
    :birth_date => person.birth_date,
    :death_date => person.death_date,
    :uri => person.uri
  }
  obj[:dbpedia_resource] = {
    :abstract => person.dbpedia_resource.abstract,
    :thumbnail => person.dbpedia_resource.thumbnail,
    :depiction => person.dbpedia_resource.depiction
  }
  obj[:wikidata_entity] = {
    :description => person.wikidata_entity.description,
    :notable_works => person.wikidata_entity.notable_works.map {|work| work.name},
    :alma_maters => person.wikidata_entity.alma_maters.map {|mater| mater.name},
  }
  obj
end
