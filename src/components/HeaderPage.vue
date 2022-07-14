<template>
<nav class="navbar navbar1 navbar-inverse">
    <div class="container-fluid">
        <span class="navbar-brand mb-0 h1" id="brand1">You Portal</span>
    </div>
</nav>
<div class="row shdow">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand logo" id="logo2" href="#">YOU!</a>
                <!-- <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> -->
                    <div class="collapse navbar-collapse justify-content-center">
                    <div class="navbar-nav">
                    <router-link to="/home">Home</router-link>&nbsp;&nbsp;
                    <router-link to="/service">Services</router-link>&nbsp;&nbsp;
                    <router-link to="/board">My Board</router-link>&nbsp;&nbsp;
                    <a class="nav-link disabled">Life at Yash</a>
                    <a class="nav-link text disabled">Documents</a>
                    <a class="nav-link disabled">CEO's Desk</a>
                </div>
            </div>
        </div>
    </nav>
    <!-- <nav class="navbar justify-content-center">
        <a class="navbar-brand logo logo1">You!</a>
        <router-link to="/home">Home</router-link>
        <a class="nav-link disabled" href="#">Services</a>

        <router-link to="/board">My Board</router-link>

        <a class="nav-link disabled" href="#">My Board</a>
        <a class="nav-link disabled">Life at Yash</a>
        <a class="nav-link text disabled">Documents</a>
        <a class="nav-link disabled">CEO's Desk</a>
    </nav> -->
</div>
</template>

<script>
export default {

}
</script>

<style>
#brand1{
    color:white;
    font-size: 10px;
    justify-content: center;
}
.navbar1 {
    background-color: black;
    height: 35px;
}

.nav-link {
    font-size: 11px;
}

.nav {
    height: 65px;
    background-color: white;

}

.shdow {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 9px rgba(0, 0, 0, 0.15);
}

.logo {
    font-weight: bold;
}
#logo2{
    color: rgb(204, 46, 46);

}
.logo1 {
    margin: 0;
    padding: 0;
}
</style>
