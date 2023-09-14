class Car {
    constructor(brand, model, year, color, km, image) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.km = km;
        this.image = image;
    }

    updateBrand(brand) {
        this.brand = brand
    }

    updateModel(model) {
        this.model = model
    }

    updateYear(year) {
        this.year = year
    }

    updateColor(color) {
        this.color = color
    }

    updateKM(km) {
        this.km = km
    }

    updateImage(color) {
        switch (color) {
            case "white":
                this.image = "white.webp"
                break;
            case "red":
                this.image = "red.jpg"
                break;
            case "silver":
                this.image = "silver.jpg"
                break;
            case "green":
                this.image = "green.jpg"
                break;
            case "gray":
                this.image = "gray.jpg"
                break;
            case "black":
                this.image = "black.png"
                break;
            case "beige":
                this.image = "beige.jpg"
                break;
            default:
                alert("bug")
                break;
        }

    }

    isValidCar() {
        if (0 == this.brand.length ||
            0 == this.model.length ||
            isNaN(this.year) ||
            isNaN(this.km)) {
            return false
        }

        return true
    }

    updateCar() {
        const userCar = new Car(
            document.getElementById("brand").value,
            document.getElementById("model").value,
            parseInt(document.getElementById("year").value),
            document.getElementById("color").value,
            parseInt(document.getElementById("km").value)
        )

        if (!userCar.isValidCar()) {
            alert("Please fill all the fields!")

            return
        }

        this.updateBrand(userCar.brand)
        this.updateModel(userCar.model)
        this.updateYear(userCar.year)
        this.updateColor(userCar.color)
        this.updateKM(userCar.km)
        this.updateImage(userCar.color)
    }

    printCarInfo() {
        const infoDiv = document.getElementById("carInfo")
        infoDiv.innerHTML = `
        <h4>Car info: </h4>
            <ul>
                <li>Brand: ${this.brand}</li>
                <li>Model: ${this.model}</li>
                <li>Year: ${this.year}</li>
                <li>Color: ${this.color}</li>
                <li>KM: ${this.km}</li>
                <img src="/images/${this.image}">
            </ul>`
    }
}
