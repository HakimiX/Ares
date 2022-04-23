PUT /company
{
  "settings": {
    "number_of_shards": 1
  },
  "mappings": {
    "properties": {
      "@timestamp" : {
        "type" : "date"
      },
      "company": {
        "type": "object"
      },
      "company.userId": {
        "type": "keyword"
      },
      "company.name": {
        "type": "keyword"
      },
      "company.catchPhrase": {
        "type": "keyword"
      },
      "company.bs": {
        "type": "keyword"
      }
    }
  }
}
