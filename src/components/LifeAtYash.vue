<template>
<div>
    <div class="main">
        <div class="pic1">
            <img src="../assets/logo.png" alt="logo" />
        </div>
        <div class="pic2">
            <img src="../assets/logo2.png" alt="logo2" />
        </div>
    </div>
</div>
<!---->
<div class="row">
    <div class="col-8">
        <div class="row">
            <div class="col-4">
                <div class="card" className="card1">
                    <table>
                        <thead>
                            <tr>
                                <th className="thead">News&Updates</th>
                                <th>
                                    <button type="button" className="views">See all</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="tdesc">
                            <tr v-for="c in calender" :key="c.id">
                                <td className="tdate">{{ c.date }}</td>
                                <td className="tupdate">{{ c.updates }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-4">
                <div class="card" className="card2">
                    <table>
                        <thead>
                            <tr>
                                <th th className="thead">Upcoming Events</th>
                                <th>
                                    <button type="button" className="views">See all</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="tdesc">
                            <tr v-for="u in upcomingevents" :key="u.id">
                                <td className="tdate">{{ u.date }}</td>
                                <td className="tupdate">{{ u.event }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row" style="width: 816px">
            <div class="card" className="card4">
                <h5 className="heading2">Thought Leardership</h5>
                <div class="row" style="margin-right: 42px; margin-left: -41px">
                    <div class="col-4" v-for="t in thoughtleadership" :key="t.id">
                        <div class="card" style="height: 200px; margin-right: 42px; margin-top: -12px">
                            <div className="imgA">
                                <img :src="t.cover" className="pictures" />
                            </div>
                        </div>
                        <!-- {{ t.label }} -->
                        <div class="row" className="label">{{ t.label }}</div>
                    </div>
                </div>
                <!-- <div class="row">{{ t.label }}</div> -->
            </div>
        </div>
        <div class="row" style="width: 816px">
            <div class="card" className="card4">
                <h5 className="heading2">Celebrations</h5>
                <div class="row" style="
                  margin-right: 42px;
                  margin-left: -41px;
                  margin-top: -19px;
                ">
                    <div class="col-4" v-for="d in decor" :key="d.id">
                        <div class="card" style="height: 200px">
                            <div className="imgA">
                                <img :src="d.cover" className="pictures" />
                            </div>
                        </div>
                        <!-- {{ t.label }} -->
                        <div class="row" className="label">{{ d.label }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-4">
        <!-- <div class="card-columns"> -->
        <div class="card" className="card3">
            <!-- <div class="col"> -->
            <div class="row">
                <div class="card" className="card6" style="
                  background-image: url(https://dbdzm869oupei.cloudfront.net/img/photomural/preview/69615.png);
                ">
                    <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" style="height: 117px; margin-top: 10px; border-radius: 64px" />
                    <div className="Name">Star Performer</div>
                </div>
            </div>
            <div class="row">
                <div class="card" className="card6">
                    <div id="grad1">
                        <div className="RnR">R&R Leader Board</div>
                        <div class="row">
                            <div class="col-3" v-for="r in rnr" :key="r.id">
                                <div>
                                    <img :src="r.smld" className="smld" />
                                    <div className="names">{{ r.names }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="card" className="card6">
                    <img src="https://blog.flipsnack.com/wp-content/uploads/2021/09/cover-10-golden-rules-of-magazine-flipsnack-cover-design.jpg" style="
                    height: 198px;
                    width: 296px;
                    border-radius: 2px;
                    margin-left: -12px;
                  " />

                    <!-- <div class="button" type="button">Preview</div> -->
                </div>
            </div>
            <div class="row">
                <div class="card" className="card6" style="
                  background-image: url(http://img.freepik.com/premium-psd/magazine-mockup-design_312099-188.jpg?w=2000);
                ">
                    <div className="vcom">VCommunique</div>
                    <div className="edition">Edition:Current|Feb 2022|Previous</div>
                    <button type="button" className="preview">Preview</button>
                </div>
            </div>
            <!-- </div> -->
        </div>
        <!-- </div> -->
    </div>
    <div class="row" className="profiles">
        <div class="card" className="card5">
            <div class="row">
                <div class="col-2">
                    <div className="Wishes">Wish Here</div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-3">
                            <div class="row">
                                <div class="col-6">
                                    <div className="celeb">Celebrations</div>
                                </div>
                                <div class="col-1">
                                    <div className="dt1">03</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col-6">
                                    <div className="celeb">New Joiners</div>
                                </div>
                                <div class="col-2">
                                    <div className="dt2">03</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div className="grati">Gratitude</div>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="row">
                        <div class="col-6">
                            <div className="bu">Business Unit</div>
                        </div>
                        <div class="col-4">
                            <label for="BUGRP"> </label>

                            <select name="BUGRP" id="bugrp">
                                <option value="BG2-BU4">BG2-BU4</option>
                                <option value="BG9-BU7">BG9-BU7</option>
                                <option value="BG16-BU10">BG16-BU10</option>
                                <option value="BG3-BU16">BG3-BU16</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="row" id="days">
                        <div class="col-2">
                            <div className="celeb">30 Dec 2021</div>
                        </div>
                        <div class="col-2">
                            <div className="newjoiner">31 Dec 2021</div>
                        </div>
                        <div class="col-2">
                            <div className="today">Today</div>
                        </div>
                        <div class="col-2">
                            <div className="grati">1 Jan 2022</div>
                        </div>
                        <div class="col-2">
                            <div className="grati">2 Jan 2022</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="row">
                        <div class="col-3">
                            <div className="celeb">Birthday</div>
                        </div>
                        <div class="col-1">
                            <div className="dt2">03</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2" v-for="e in employees" :key="e.id" style="flex: 0 0 auto; width: 13.666667%">
                        <!-- <div class="card" style="height: 200px"> -->
                        <div class="card">
                            <div className="imgA">
                                <img :src="e.dp" className="dp" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-4" className="empdetails">
                                <div class="row">
                                    {{ e.name }}
                                </div>
                                <div class="row">
                                    {{ e.designation }}
                                </div>
                                <div class="row">
                                    {{ e.businessgroup }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="row">
                        <div class="col-3">
                            <div className="celeb">Work Anniversary</div>
                        </div>
                        <div class="col-1">
                            <div className="dt2">03</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2" v-for="e in employees" :key="e.id" style="flex: 0 0 auto; width: 13.666667%">
                        <!-- <div class="card" style="height: 200px"> -->
                        <div class="card">
                            <div className="imgA">
                                <img :src="e.dp" className="dp" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-4" className="empdetails">
                                <div class="row">
                                    {{ e.name }}
                                </div>
                                <div class="row">
                                    {{ e.designation }}
                                </div>
                                <div class="row">
                                    {{ e.businessgroup }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="row">
                        <div class="col-3">
                            <div className="celeb">Wedding Anniversary</div>
                        </div>
                        <div class="col-1">
                            <div className="dt2">03</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2" v-for="e in employees" :key="e.id" style="flex: 0 0 auto; width: 13.666667%">
                        <!-- <div class="card" style="height: 200px"> -->
                        <div class="card">
                            <div className="imgA">
                                <img :src="e.dp" className="dp" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-4" className="empdetails">
                                <div class="row">
                                    {{ e.name }}
                                </div>
                                <div class="row">
                                    {{ e.designation }}
                                </div>
                                <div class="row">
                                    {{ e.businessgroup }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<hr class="btm" style="margin-top: 20px" />
<div class="footer">All rights reserved</div>

<!---->
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            calender: [],
            upcomingevents: [],
            thoughtleadership: [],
            decor: [],
            employees: [],
        };
    },
    async created() {
        try {
            const res = await axios.get("http://localhost:3001/calender");
            const res1 = await axios.get("http://localhost:3001/upcomingevents");
            const res2 = await axios.get("http://localhost:3001/thoughtleadership");
            const res3 = await axios.get("http://localhost:3001/decor");
            const res4 = await axios.get("http://localhost:3001/employees");
            const res5 = await axios.get("http://localhost:3001/rnr");

            this.calender = res.data;
            this.upcomingevents = res1.data;
            this.thoughtleadership = res2.data;
            this.decor = res3.data;
            this.employees = res4.data;
            this.rnr = res5.data;
        } catch (e) {
            console.error(e);
        }
    },
};
</script>

<style>
.vcom {
    margin-top: 6px;
    margin-left: -159px;
    font-size: medium;
    font-weight: bold;
    color: lightgrey;
}

.edition {
    font-size: 11px;
    margin-left: -91px;
}

.smld {
    height: 68px;
    width: 73px;
    border-radius: 100px;
    margin-top: 28px;
    margin-left: 32px;
}

#grad1 {
    background-image: linear-gradient(to bottom left, lightblue, purple);
    height: 198px;
    width: 296px;
    margin-left: -12px;
    border-radius: 5px;
    margin-top: 0px;
}

.Name {
    font-family: sans-serif;
    color: white;
    background-color: purple;
    margin-top: 14px;
    width: 181px;
    margin-left: 53px;
}

.card6 {
    height: 200px;
    border: 1 px solid bisque;
    border: 1px solid;
    width: 298px;
    margin-top: 16px;
    margin-left: 28px;
    border-radius: 5px;
}

.sm-card {
    margin-top: 25px;
    height: 200px;
    width: 20px;
    height: 200px;
    width: 301px;
    margin-left: 26px;
}

.dp {
    height: 133px;
    width: 134px;
    border-radius: 4px;
}

.empdetails {
    font-size: 8px;
    font-weight: bold;
    margin-left: 97px;
    margin-top: 14px;
}

.card {
    height: 134px;
    width: 135px;
    margin-left: 38px;
    margin-top: 13px;
}

.label {
    margin-top: 9px;
    font-weight: bold;
    font-size: 12px;
    font-family: system-ui;
    margin-left: 71px;
}

.pictures {
    width: 246px;
    height: 199px;
    border-radius: 7px;
}

#days {
    margin-left: 182px;
    margin-right: -217px;
}

#bugrp {
    font-size: 10px;
    font-weight: bold;
    border-radius: 100px;
    padding: 5px;
    margin-top: 29px;
    border: #e5e8ea;
    margin-right: -65px;
    background-color: #e5e8ea;
    width: 91px;
}

.bu {
    margin-top: 35px;
    font-size: 12px;
    margin-right: -147px;
}

.grati {
    margin-top: 35px;
    font-size: 12px;
    margin-left: -65px;
}

.today {
    font-size: 10px;
    margin-top: 36px;
    border-radius: 100px;
    border: #e5e8ea;
    font-weight: bold;
    background-color: #e5e8ea;
    padding: 3px;
    width: 63px;
}

.newjoiner {
    font-size: 12px;
    margin-top: 36px;
}

.dt1 {
    margin-top: 34px;
    font-size: 12px;
    border: 1 px solid black;
    background-color: #f7e156;
    border-radius: 100px;
    width: 24px;
    padding: 2px;
}

.dt2 {
    margin-top: 34px;
    font-size: 12px;
    border: 1 px solid black;
    background-color: #e5e8ea;
    border-radius: 100px;
    width: 24px;
    padding: 2px;
}

.celeb {
    margin-top: 36px;
    font-size: 11px;
    font-weight: bold;
}

.Wishes {
    margin-top: 31px;
    margin-right: 22px;
    font-size: 19px;
}

.heading2 {
    margin-right: 573px;
    margin-top: 24px;
    font-size: larger;
    margin-bottom: 20px;
}

.tdesc {
    margin-top: 10px;
}

.tdate {
    font-weight: bold;
    font-size: 11px;
    font-family: sans-serif;
}

.names {
    margin-top: 10px;
    margin-left: 48px;
    font-family: monospace;
    color: white;
}

.tupdate {
    margin-top: 20px !important;
    text-align: left;
    font-size: 10px;
    padding: 4px;
}

.card1 {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.15);
    width: 397px;
    height: 234px;
    margin-left: 75px;
}

.card2 {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.15);
    width: 397px;
    height: 234px;
    margin-left: 212px;
}

.card3 {
    width: 330px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.15);
    height: 881px;
    margin-left: 68px;
    margin-right: -38px;
}

.card4 {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.15);
    /* height: 200px; */
    height: 299px;
    margin-top: 25px;
    margin-left: 90px;
}

.card5 {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.15);
    margin-top: 25px;
    height: 895px;

    width: 1185px;
    margin-left: 77px;
    background-color: #f7fafd;
}

.th {
    font-size: 12px;
}

.main {
    justify-content: center;
    overflow-x: hidden;
    overflow-y: hidden;
}

.pic1 {
    width: 20px;
    margin-top: -5px;
    margin-bottom: 10px;
    margin-right: 20px;
    height: 437px;
}

.pic2 {
    width: 200px;
    height: 499px;
    margin-bottom: 10px;
    margin-right: 20px;
}

.views {
    -webkit-appearance: button;
    width: 51px;
    margin-top: 15px;
    height: 23px;
    font-size: 10px;
    color: white;
    background-color: black;
    margin-left: 137px;
    border-radius: 3px;
    margin-bottom: 26px;
    margin-top: 22px;
}

.preview {
    -webkit-appearance: button;
    width: 51px;
    margin-top: 99px;
    height: 23px;
    font-size: 10px;
    color: white;
    background-color: black;
    margin-left: 13px;
    border-radius: 3px;
}

.new {
    text-align: right;
    background-color: white;
    box-shadow: white;
    border: 1px solid black;
}

.container {
    margin-top: 50px;
}

.thead {
    /* font-family: sans-serif;
  font-size: 13px; */
    /* margin-top: 15px; */
    font-family: revert;
    font-size: 13px;
    /* margin-top: 15px; */
    padding: 9px;
    padding-bottom: 20 px;
}

.footer {
    font-size: 11px;
    font-weight: bold;
    margin-right: 1000px;
    margin-top: -5px;
}
</style>
