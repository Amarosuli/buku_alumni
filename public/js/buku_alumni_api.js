let data_alumni = [
    {
        "id": "0001",
        "nama": "Maulana Haikal",
        "place_birth": "Sangatta",
        "date_birth": "10-02-1995",
        "thesis": "Perancangan bom atom untuk menghancurkan rezim syiah"
    },
    {
        "id": "0002",
        "nama": "Abu Soleh",
        "place_birth": "German",
        "date_birth": "10-02-1994",
        "thesis": "Perancangan gas beracun dari parfume"
    }
]

let api = {
    insertData(data) {
        data_alumni.push(data)
    },
    editData(id) {
        console.log(data_alumni.filter(data => data.id == id))
    },
    removeData(id) {

    },
    getAllData() {
       data_alumni.map(data => {
          localStorage.setItem(data)
       })
        return data_alumni
    },
    getDataById(id) {
        return data_alumni.find(data => data.id == id)
    }
}

export default api