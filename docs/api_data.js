define({ "api": [  {    "type": "get",    "url": "/bodies",    "title": "Request all bodies of student government",    "name": "GetBodies",    "group": "Bodies",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "bodies",            "description": "<p>List of student government bodies.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "bodies.uniqueId",            "description": "<p>Unique, string identifier that should serve as the permanent URL for the body</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "bodies.name",            "description": "<p>The human-readable name of the body</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "bodies.createdAt",            "description": "<p>The timestamp that the body was created at (ISO format)</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "bodies.updatedAt",            "description": "<p>The timestamp that the body was last updated at (ISO format)</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "models/body.js",    "groupTitle": "Bodies"  }] });
