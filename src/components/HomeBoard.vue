<template>
<div class="container-fluid">
    <!-- <img src="../assets/officeimage.jpg" class="img-fluid img1" alt="..."> -->
    <div class="row">
        <div class="col-6 grid1 p-0">
            <img src="../assets/building1.jpg" class="img-fluid img1" alt="...">
        </div>
        <div class="col-6 p-0">
            <div class="row office">
                <div class="col-6">
                    <img src="../assets/building2.jpg" class="img-fluid officecard building1img" alt="...">
                </div>
                <div class="col-6">
                    <img src="../assets/trophy.jpg" class="img-fluid trophy1" alt="...">
                </div>
            </div>
            <!----->
            <div class="row">
                <div class="col-6">
                    <img src="../assets/meeting.jpg" class="img-fluid officecard building1img" alt="...">
                </div>
                <div class="col-6">
                    <div class="row clientmessage">
                        <h6 class="empname">Hi! Abhishek :)</h6>
                        <p class="tip1">Tip of the day!</p>
                        <p class="note">Always try to consider Client's time zone in while discussing with clients.</p>
                        <!-- <img src="../assets/trophy.jpg" class="img-fluid trophy1" alt="..."> -->
                    </div>
                </div>
            </div>
            <!----->
        </div>
    </div>
</div>
<!--infogram-->
<div class="container-fluid">
    <div class="row">
        <div class="float-left" style="width:65%">
            <div class="col-sm-8 col1">
                <!--row1 in first column-->
                <div class="row" style="width:780px">
                    <div class="col-sm-3 py-2 px-1" v-for="obj in todos" :key="obj.id">
                        <div class="card" style="height:200px;">
                            <div class="row">
                                <div class=col-sm-4>
                                    <img :src='obj.cover' class="card-img-top" style="width:80px">
                                </div>
                                <div class="col-sm-7">
                                    <p class="font-weight-light card-title title1">{{obj.names}}</p>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text font-weight-light text1">{{obj.description}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--row3 in first column-->
                <div class="row">
                    <p class="p1" id="offer">Scratch here to check what you won today!</p>
                    <img src="../assets/betterluck.png" class="img2" style="width:420px;">
                </div>
            </div>
        </div>
        <!--for second column card-->
        <div class="float-left" style="width:25%">
            <div class="col-sm-4 colsecond px-4 pt-2">
                <div class="card" style="width:22rem; height:57rem;" id="box1">
                    <p class="alert">Alerts And Notification Box</p>
                    <div class="card-body">
                        <div class="row" id="awardimg1" v-for="obj1 in company" :key="obj1.id">
                            <div class="col-sm-4">
                                <img src="../assets/award1.png" class="awardimg">
                            </div>
                            <div class="col-sm-8 cardverticle">
                                <p class="acco1">{{obj1.header}}</p>
                                <p class="msg">{{obj1.description}}</p>
                                <p class="msg1" strong>{{obj1.name}}</p>
                                <p class="msg2">{{obj1.updates}}<span>{{obj1.views}}</span></p>
                            </div>
                        </div>
                        <hr>
                        <!--separate-->
                        <p class="pp1">Point of Contact</p>
                        <div class="row" v-for="obj2 in emergencycontact" :key="obj2.id">
                            <div class="col-sm-4 mb-5">
                                <img src="../assets/emergency.png">
                            </div>
                            <div class="col-sm-8 cardverticle1">
                                <p class="acco1">{{obj2.header}}</p>
                                <p class="contact1">{{obj2.contact}}</p>
                                <p class="email1">{{obj2.email}}</p>
                                <p class="immediatep" strong>contact:{{obj2.immediatecontact}}</p>
                            </div>
                        </div>
                        <!---->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
// import Vue from 'vue';

// Vue.use(axios)

export default {
    name: "app",
    data() {
        return {
            company: [],
            todos: [],
            emergencycontact: [],
        }
    },
    async created() {
        try {
            const response = await axios.get('http://localhost:3001/todos');
            const res = await axios.get('http://localhost:3001/todo');
            const res1 = await axios.get('http://localhost:3001/todo1');
            this.todos = response.data;
            this.company = res.data;
            this.emergencycontact = res1.data;
        } catch (e) {
            console.error(e)
        }
    }

}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}

.grid1 {
    padding-left: 29px;
    margin-right: -34px;
    margin-left: 29px;
}

.office {
    margin-top: 20px;
}

.officecard {
    margin-right: -45px;
}

.building1img {
    height: 196px;
    padding: 0;
    margin-left: -38px;
    width: 287px;

}

.trophy1 {
    height: 198px;
    padding: 0;
    margin-left: -56px;
    padding-right: 23px;
    width: 312px;
    padding-bottom: 1px;
}
.img1 {
    margin-top: 20px;
    width: 93%;
    margin-bottom: 38px;
}

.empname {
    font-size: 18px;
    padding-top: 38px;
    padding-right: 131px;
    color: black;
    font-weight: bold;
    text-align: left;
}

.tip1 {
    font-size: 14px;
    color: black;
    padding-right: 120px;
    padding-bottom: 29px;
    padding-top: 18px;
    text-align: left;
}

.note {
    font-size: 12px;
    color: black;
    text-align: left;
}

.clientmessage {
    background-image: linear-gradient(45deg, #ffcccc, #ff4d4d);
    margin-right: 51px;
    width: 280px;
    margin-left: -28px;
    height: 197px;
}

.col1 {
    margin-left: 47px;
    float: left;
}

.colsecond {
    float: left;
}

.card-img-top {
    padding: 15px 10px 12px 10px;
}

.title1 {
    padding: 35px 15px 12px 2px;
    font-size: 15px;

}

.title2 {
    padding-right: 45px;
}

.title3 {
    padding-right: 50px;
    padding-bottom: 14px;
}

.title5 {
    font-size: 16px;
    padding: 25px 15px 12px 2px;
}

.text1 {
    font-size: 12px;
    padding-bottom: 23px;
}

p.text2 {
    font-size: 12px;
    padding-bottom: 22px;
}

p.text3 {
    font-size: 12px;

}

.text4 {
    font-size: 12px;
}

.text5 {
    font-size: 12px;
}

.text6 {
    font-size: 11px;
}

.cardbody1 {
    height: 68px;
}

.p1 {
    padding-top: 20px;
    padding-bottom: 0px;
    padding-right: 232px;

}

.img2 {
    width: 20%;
    padding-bottom: 1px;
}

/* notification box */
.cardverticle {
    margin-bottom: -50px;
}

.cardverticle1 {
    margin-bottom: -50px;
    text-align: left;
}

#box1 {
    color: #6e6e6e;
    background-color: #f4f4f4;
    border: none;
}

.alert {
    position: relative;
    padding: 1rem 1rem;
    margin-bottom: -1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    padding-right: 133px;
}

.awardimg {
    width: 80%;
}

#awardimg1 {
    height: 12%;
}

.contact1 {
    font-size: 17px;
    margin-right: 88px;
    margin-bottom: 2px;

}

.immediatep {
    margin-top: -16px;
    font-size: 10px;
    text-align: lext;
    padding-right: 92px;

}

.email1 {
    font-size: 10px;
    padding-right: 65px;

}

p.acco1 {
    font-style: normal;
    font-weight: bold;
    font-size: 9px;
    margin-top: 0;
    margin-bottom: 4px;
    padding-right: 70px;
    text-align: left;
}

.msg {
    font-size: 10px;
    font-style: normal;
    padding-bottom: 0px !important;
    padding-right: 7px !important;
    color: #4c4e4d;
    text-align: left;
    margin-bottom: 10px;
}
.msg1 {
    text-align: left;
    font-size: 9px;
    font-weight: bold;
    padding-right: 100px !important;
    margin-bottom: 8px
}
.msg2 {
    text-align: left;
    font-size: 8px;
    font-weight: bold;
    margin-bottom: 80px !important;
    padding-right: 100px !important;
    margin-top: -5px;
}
.pp1 {
    margin-right: 201px;
    font-size: 14px;
}
</style>
