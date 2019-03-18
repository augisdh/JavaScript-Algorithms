"use strict";

const data = {
"name": "LT",
	"size": 10,
	"nodes": [
		{
			"name": "Kaunas",
			"size": 2,
			"nodes": [
				{
				"name": "Centras",
				"size": 1,
				"nodes": [
						{
						"name": "lasives al.",
						"size": 0.5,
						"nodes": []
						}
					]
				},
				{
				"name": "Žaliakalnis",
				"size": 1,
				"nodes": []
				}
			]
		},
		{
			"name": "Vilnius",
			"size": 4,
			"nodes": []
		}
	]
}


// Display DATA as below ↴↴↴↴↴↴↴↴↴↴↴↴
// LT 10
// LT - Kaunas 2
// LT - Kaunas - Centras 1
// LT - Kaunas - Centras - lasives al. 0.5
// LT - Kaunas - Žaliakalnis 1
// LT - Vilnius 4

function consoleNestedObject(obj, parent){
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
			if (Object.prototype.toString.call(obj) !== '[object Array]') {
				parent += ` ${obj.name} -`
			}
      consoleNestedObject(obj[key], parent)
    } else if (key === 'name') {
      console.log(`${parent} ${obj.name} ${obj.size}`)
    }
  }
}

consoleNestedObject(data, '')
