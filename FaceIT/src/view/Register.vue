<form id="registerform">
    <input type="text" placeholder="Name" id="name" required>
    <input type="email" placeholder="Email" id="email" required>
    <input type="password" placeholder="Password" id="password" required>
    <button type="submit">Register</button>
</form>

<script> 
    document.getElementById("registerform").onsubmit = async function (e) {
        e.preventDefault()
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const response = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                password: password.value
            })
        })
        const data = await response.json()
        alert(data.message)
    }
</script>

