<template>
  <div class="container-fluid">
    <img src="../assets/board.jpg" class="img-fluid" alt="..." />
  </div>
  <!--container--->
  <div class="container-fluid bigcontainer">
    <div class="row">
      <div class="float-left" style="width: 65%">
        <div class="row">
          <div class="col-sm-8 largebox" style="width: 780px">
            <div class="row">
              <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                  <a class="navbar-brand mywall1">My Wall</a>

                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                      <a class="nav-link active" aria-current="page" href="#"
                        >Personal Details</a
                      >
                      <a class="nav-link" href="#">BG Details</a>
                      <a class="nav-link" href="#">BU Details </a>
                      <a class="nav-link" href="#">Awards </a>
                      <a class="nav-link" href="#">compliments </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div class="row divbox1" v-for="objs in companyaim" :key="objs.id">
              <div class="col-sm-3 cloumnverticle">
                <p>{{ objs.header }}</p>
              </div>
              <div class="col-sm-8 descriptionblock">
                <p>{{ objs.description }}</p>
              </div>
            </div>
            <!-----try for customers--->
            <div class="customer">
              <div class="col-sm-3 customerclmn">
                <p class="customerheading">Customers</p>
              </div>
              <div class="" v-for="imgobj in customers" :key="imgobj.id">
                <div class="">
                  <img
                    :src="imgobj.logocover"
                    style="width: 110px; height: 100px"
                  />
                </div>
              </div>
            </div>
            <!-------->
            <div class="row rowmargin">
              <div class="container containerrow">
                <p class="mesageheader">Message to New Joiner</p>
                <p class="message1">
                  Two roads diverged in a wood, and I took the one less
                  travelled by, and that has made all the difference. We are the
                  only unit who cater to customers on a gamut of technologies
                  ranging from legacy to cutting edge.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row"> -->
        <div class="row">
          <div class="col-sm-8 largebox2">
            <div class="row">
              <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                  <a class="navbar-brand mywall1">Knowledge Base</a>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarNavAltMarkup1"
                  >
                    <div class="navbar-nav">
                      <a class="nav-link active" aria-current="page" href="#"
                        >About the Client</a
                      >
                      <a class="nav-link" href="#">Domain Info</a>
                      <a class="nav-link" href="#">Technology</a>
                      <a class="nav-link" href="#">Skills </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <!---->
            <div class="row" v-for="objs1 in knowledge" :key="objs1.id">
              <div class="col-sm-3 cloumnverticle">
                <p>{{ objs1.header }}</p>
              </div>
              <div class="col-sm-8 descriptionblock1">
                <p>{{ objs1.description }}</p>
              </div>
            </div>
            <!---->
            <!------>
          </div>
        </div>
      </div>
      <!---->
      <div class="float-left px-4" style="width: 35%">
        <div class="col-sm-4">
          <div class="card" style="width: 400px; height: 65rem" id="box1">
            <div class="row">
              <p class="todo1">To Do</p>
            </div>
            <div class="row">
              <div class="col-6">
                <p class="details1">Deduction details</p>
              </div>
              <div class="col-6">
                <button type="button" className="view">Go</button>
              </div>
            </div>
            <div class="row daterow">
              <p class="daysp">2 Days</p>
              <p class="date1">
                16<sup>th</sup> Dec'21 & 31<sup>st</sup> Dec'21
              </p>
            </div>

            <!---->
            <div class="class1">
              <div class="row">
                <div class="col-6">
                  <p class="details1">Goal Settings</p>
                </div>
                <div class="col-6">
                  <button type="button" className="view">Go</button>
                </div>
              </div>
              <div class="row daterow">
                <p class="completiondate">
                  Complete it before 27<sup>th</sup> Dec'21
                </p>
              </div>
            </div>
            <!----->
            <div class="class1">
              <div class="row">
                <div class="col-6">
                  <p class="details1">Submit Timesheet</p>
                </div>
                <div class="col-6">
                  <button type="button" className="view">Go</button>
                </div>
              </div>
              <!---->
              <div
                class="row timesheet1"
                v-for="cal in calenderdata"
                :key="cal.id"
              >
                <div class="col-6">
                  <p class="dates">{{ cal.header }}</p>
                </div>
                <div class="col-6">
                  <p class="dates">{{ cal.cdate }}</p>
                </div>
              </div>
            </div>
            <!----->
            <div class="class1">
              <div class="row">
                <div class="col-6">
                  <p class="details1">Infogram Attendance</p>
                </div>
              </div>
              <div
                class="row infogramdiv"
                v-for="info1 in attendancedata"
                :key="info1.id"
              >
                <div class="col-6">
                  <p class="dates">{{ info1.updateddate }}</p>
                  <!-- <p class="dates">03rd Jan'22 - 08th Jan'22</p>
                                <p class="dates">03rd Jan'22 - 08th Jan'22</p> -->
                </div>
                <div class="col-6">
                  <p class="dates">{{ info1.updation }}</p>
                  <!-- <p class="dates">Submitted</p>
                                <p class="dates">Submitted</p> -->
                </div>
              </div>
            </div>
            <!----->
            <p class="profile1">Finish Your Profile</p>
            <div class="row profileblock">
              <!-- <img src="../assets/profile.jpg" class="progrssbar"> -->
              <div class="circleprogrss">
                <div class="circle__body">
                  <div class="circle__fill"></div>
                  <div class="circle__cover">60% Completed</div>
                </div>
              </div>
              <button type="button" className="view1">Go</button>
            </div>
            <!----->
            <div class="row">
              <p class="benefit1">My Benefits</p>
            </div>
            <div class="row policyblock">
              <p class="promotionmsg">Congratulations on your promotion!</p>
              <p class="policymsg1">You are now eligible for</p>
              <p class="ecopmsg">Ecop Policy</p>
              <button type="button" class="button1">know more</button>
            </div>
            <!----->
          </div>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      companyaim: [],
      knowledge: [],
      calenderdata: [],
      attendancedata: [],
      customers: [],
    };
  },
  async created() {
    try {
      var ress = await axios.get("http://localhost:3004/companyaim");
      var ress2 = await axios.get("http://localhost:3004/knowledge");
      var calres = await axios.get("http://localhost:3004/calenderdata");
      var attendancerep = await axios.get(
        "http://localhost:3004/attendancedata"
      );
      var responsee = await axios.get("http://localhost:3004/customers");

      this.companyaim = ress.data;
      this.knowledge = ress2.data;
      this.calenderdata = calres.data;
      this.attendancedata = attendancerep.data;
      this.customers = responsee.data;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>
.customer {
  display: flex;
  flex-wrap: wrap;
}

.customerclmn {
  width: 130px;
}

#box1 {
  color: #6e6e6e;
  background-color: #f4f4f4;
  border: none;
}

.bigcontainer {
  height: 1177px;
  padding-top: 25px;
  width: 92%;
}

.largebox {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.15);
  flex: 0 0 auto;
}

/* column first large second row*/
.largebox2 {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.15);
  flex: 0 0 auto;
  margin-top: 25px;
  width: 800px;
  height: 303px;
}

#navbarNavAltMarkup {
  padding-left: 130px;
}

.descriptionblock {
  margin-left: -40px;
  font-family: "Inv Maison Neue", "Open Sans", open-sans, sans-serif;
  font-size: 11px;
  color: #6e6e6e;
  line-height: 20px;
  text-align: left;
}

.customerheading {
  font-size: 12px;
  padding-left: 45px;
  font-weight: bold;
  margin-top: 20px;
}

.descriptionblock1 {
  font-family: "Inv Maison Neue", "Open Sans", open-sans, sans-serif;
  font-size: 12px;
  color: #4a4848;
  line-height: 20px;
  text-align: left;
  margin-left: -40px;
}

.cloumnverticle {
  padding-left: 50px;
  font-family: "Inv Maison Neue", open-sans, sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
}

.mywall1 {
  font-size: 14px;
  font-weight: bold;
}

.divbox1 {
  padding-top: 35px;
  margin-top: -25px;
}

/* block content */
.containerrow {
  margin-top: 40px;
  background-color: rgb(242, 236, 230);
  border-radius: 10px;
  width: 600px;
  height: 140px !important;
}

.message1 {
  font-size: 12px;
  line-height: 20px;
  padding: 0px 40px;
  text-align: left;
  margin-bottom: 30px;
}

.rowmargin {
  margin-bottom: 40px;
}

.mesageheader {
  color: darkgoldenrod;
  font-size: 14px;
  padding-top: 12px;
  margin-left: -400px;
}

/*second row */
#navbarNavAltMarkup1 {
  padding-left: 50px;
}

/* column */
.todo1 {
  margin-top: 30px;
  padding-right: 310px;
  color: black;
}

.details1 {
  font-size: 12px;
  padding-right: 25px;
  font-weight: bold;
}

.dates {
  font-size: 11px;
  font-weight: bold;
  padding-top: 5px;
  margin-bottom: 5px;
}

.view {
  width: 60px;
  height: 25px;
  color: white;
  border-radius: 5px;
  background-color: black;
  margin-right: 0px;
}

.view1 {
  margin-top: 53px;
  margin-left: 35px;
  width: 60px;
  height: 25px;
  color: white;
  border-radius: 5px;
  background-color: black;
  margin-right: 0px;
}

.daterow {
  width: 340px;
  background-color: #fffbfb;
  height: 85px;
  margin-left: 30px;
  margin-top: 3px;
}

.timesheet1 {
  background-color: #fffbfb;
  width: 340px;
  height: 39px;
  margin-left: 30px;
}

.infogramdiv {
  background-color: #fffbfb;
  width: 340px;
  margin-left: 30px;
}

.daysp {
  font-size: 28px;
  color: black;
  padding-top: 10px;
  margin-bottom: initial;
}

.date1 {
  font-size: 11px;
  font-weight: bold;
}

.class1 {
  margin-top: 12px;
}

.completiondate {
  padding-top: 32px;
  font-size: 12px;
  font-weight: bold;
}

.profile1 {
  padding-top: 20px;
  font-size: 13px;
  font-weight: bold;
  margin-right: 220px;
}

.progrssbar {
  width: 365px;
  margin-left: 30px;
  margin-right: 20px;
}

.benefit1 {
  font-size: 12px;
  font-weight: bold;
  margin-top: 34px;
  padding-right: 274px;
}

/* css for circle progrsss bar*/
.profileblock {
  height: 120px;
  width: 340px;
  margin-left: 30px;
  margin-right: 30px;
  /* background-color: aqua; */
  border-radius: 10px;
  background: linear-gradient(
    45deg,
    #81ecec,
    10%,
    rgb(98, 230, 203),
    #81ecec,
    #81ecec
  );
}

.circleprogrss {
  width: 100%;
  max-width: 150px;
  font-family: "Roboto", sans-serif;
  color: white;
  margin-top: 25px;
  margin-left: 20px;
  font-size: 12px;
}

.circle__body {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  background: #b4c0be;
  position: relative;
  border-top-left-radius: 100% 200%;
  border-top-right-radius: 100% 200%;
  overflow: hidden;
}

.circle__fill {
  position: absolute;
  top: 100%;
  left: 0;
  width: inherit;
  height: 100%;
  background: white;
  transform-origin: center top;
  transform: rotate(0.29turn);
  transition: transform 0.2s ease-out;
}

.circle__cover {
  width: 85%;
  height: 150%;
  background: rgb(98, 230, 203);
  border-radius: 50%;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);

  /* Text */
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25%;
  box-sizing: border-box;
}

/* */

.policyblock {
  height: 190px;
  width: 340px;
  margin-left: 30px;
  margin-right: 30px;
  background-color: aqua;
  border-radius: 1px;
  background: linear-gradient(
    45deg,
    #fab1a0,
    10%,
    rgb(235, 113, 134),
    #ffeaa7,
    #81ecec
  );
}

.promotionmsg {
  margin-top: 33px;
  font-size: 16px;
  color: azure;
}

.policymsg1 {
  font-size: 13px;
  margin-top: 11px;
  margin-left: 7px;
  color: azure;
  margin-bottom: 30px;
  line-height: 0px;
}

.ecopmsg {
  font-size: 20px;
  font-weight: bold;
  line-height: 0px;
  padding-bottom: 33px;
  padding-left: 20px;
  color: azure !important;
  margin-top: -15px;
}

.button1 {
  font-size: 10px;
  border-radius: 6px;
  height: 21px;
  width: 100px;
  margin-left: 131px;
  margin-top: -39px;
  background-color: black;
  color: azure;
}
</style>
