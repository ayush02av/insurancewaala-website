document.getElementById('age').addEventListener('change', () => {
    document.getElementById('age-display').innerHTML = document.getElementById('age').value
})

document.getElementById('noc').addEventListener('change', () => {
    document.getElementById('noc-display').innerHTML = document.getElementById('noc').value
})

document.getElementById('submit').addEventListener('click', () => {
    var age = document.getElementById('age').value

    var female = null
    if (document.getElementById('sex-female').checked)
        female = 1
    else if (document.getElementById('sex-male').checked)
        female = 0

    var height = document.getElementById('height').value / 100
    var weight = document.getElementById('weight').value
    var bmi = weight / (height * height)

    var children = document.getElementById('noc').value

    var smoker = null
    if (document.getElementById('smoker-yes').checked)
        smoker = 1
    else if (document.getElementById('smoker-no').checked)
        smoker = 0

    var region = document.getElementById('region').value

    data = {
        age: parseInt(age),
        female: female,
        bmi: parseFloat(bmi),
        children: parseInt(children),
        smoker: smoker,
        region: parseInt(region)
    }

    axios.post('https://insurancewaala-mlapi.up.railway.app', data)
        .then(function (response) {
            if (response.data.success == 1)
                swal({
                    text: `Per Month Charges: ₹${response.data.output}`,
                    icon: "success",
                })
            else
                swal({
                    text: `Errors:\n${response.data.errors.join('\n')}`,
                    icon: "error",
                })
        })
        .catch(function (error) {
            window.alert(error);
        });
})