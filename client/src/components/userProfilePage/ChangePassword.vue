<template>
  <div class="main-container">
    <div class="header">
      <div class="title">Change Password</div>
        For your account's security, do not share your password with anyone else
      </div>
    <div class="form">
      <div class="row-container">
        <div class="label">
          Current Password
        </div>
        <div class="input">
            <input type="placeholder">
        </div>
      </div>
      <div class="row-container">
        <div class="label">
          New Password
        </div>
        <div class="input">
            <input type="placeholder">
        </div>
      </div>
      <div class="row-container">
        <div class="label">
          Confirm Password
        </div>
        <div class="input">
            <input type="placeholder">
        </div>
      </div>
    </div>
    <div class="confirm-button-container">
        <div class="confirm-button">Confirm</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-container {
  position: relative;
  float: left;
  left: 0px;
  width: 940px;
  background: #FFFFFF;
  height: 100%;
  margin-left: 45px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 13%);
  border-radius: 0.125rem;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 10px;
}

.header {
  padding-top: 18px;
  padding-bottom: 18px;
  color: #555555;
  letter-spacing: -1px;
  word-spacing: 1px;
  border-bottom: 0.0625rem solid #efefef;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: black;
  letter-spacing: 0px;
  margin-bottom: 5px;
}

.form {
  position: relative;
  padding-top: 30px;
  padding-left: 25px;
}

.row-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.label {
  position: relative;
  color: rgba(85,85,85,.8);
  float: left;
  width: 150px;
  margin-right: 40px;
}

.input {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 40px;
  border: 1px solid rgba(0,0,0,.14);
  border-radius: 2px;
  width: 300px;
}

.input input {
  width: 100%;
  background: none;
  padding: 12px;
  outline: none;
  border: 0;
  filter: none;
}

.confirm-button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 60px;
}

.confirm-button {
  color: white;
  background: rgb(145, 75, 75);
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
}

.confirm-button:hover {
  cursor: pointer;
  background: rgb(171, 88, 88);
}

.confirm-button:active {
  background: rgb(118, 61, 61);
}

</style>