const settings = {
  "name": "my-website",
  "state": {
    "frontity": {
      "url": "https://maturocha.com.ar",
      "title": "Mati Rocha",
      "description": "Web developer"
    }
  },
  "packages": [
    {
      "name": "my-website-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/google-analytics",
      "state": {
        "googleAnalytics": {
          "trackingId": "G-1SQ1T6H9K6",
        },
      },
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://wp.maturocha.com.ar",
          "homepage": "/home",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
