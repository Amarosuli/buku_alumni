import api from "./buku_alumni_api.js";

api.insertData({
   "id": "0003",
    "nama": "Haikal",
    "place_birth": "Jepang",
    "date_birth": "02-03-1995",
    "thesis": "hahahah"
})

class template {
   constructor() {
      console.log("haha")
   }
}

let app = {
    set(config) {
        this.target = config.target
    },
    render() {
        let data = api.getAllData()
        let container = document.createElement('div')

        new template

        if (data.length != 0) {
            data.forEach(d => {

            })
            document.getElementById(this.target).appendChild(container)
        }
    },
    edit() {
        console.log("iki")
    }
}

export default app