--- 
notebook: 
  owner: mikkel
  name: Vega lite
---
# Example chart with Vega-lite 😊

This is a simple chart, using vega-lite

```vega-lite
{
  "mark": "bar",
  "encoding": {
    "y": {"field": "office", "type": "ordinal", "sort": "-x"},
    "x": {"field": "n", "type": "quantitative"}
  },
  "data": {
    "values": [
      {"office": "Barry Plant Inner North Group", "n": 14},
      {"office": "Shepparton", "n": 8},
      {"office": "Boronia", "n": 2},
      {"office": "Ray White - Phillip Island", "n": 1},
      {"office": "Noble Park", "n": 1},
      {"office": "Mornington", "n": 1},
      {"office": "Mildura", "n": 2},
      {"office": "Pakenham", "n": 1},
      {"office": "Warrnambool", "n": 1},
      {"office": "Preston", "n": 1},
      {"office": "Greensborough", "n": 1}
    ]
  },
  "width": 800,
  "height": 400
}
```
