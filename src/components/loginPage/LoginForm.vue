<template>
  <div class="container">
            <h1>Log in</h1>
            <form action="" class="login-form">
                <div class="email">
                    <div class="email-label">
                        <label for="email">Email</label>
                        <span>
                            Need an account?
                            <span>Sign up</span>
                        </span>
                    </div>
                    <div class="email-input">
                        <input type="text" class="email-placeholder">
                    </div>
                </div>
                <div class="password">
                    <div class="password-label">
                        <label for="password">Password</label>
                        <span @click="show">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                            Show
                        </span>
                    </div>
                    <div class="password-input">
                        <input :type="input" class="password-placeholder">
                    </div>
                </div>
            </form>
            <div class="bottom-box">
                <div class="button">
                    <button>Log in</button>
                </div>
                <div class="forgot-password">
                    <router-link>Forgot password?</router-link>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            input: "password"
        }
    },
    methods: {
        show() {
            if (this.input === "password") {
                this.input = "text";
                return
            }
            this.input = "password";
        }
    }
}
</script>

<style scoped>
.viewport {
    background-color: rgb(247,247,247);
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container {
    position: relative;
    height: 600px;
    width: 480px;
    background-color: white;
    border: 1px solid #e3e3e3;    
    border-radius: 16px;
    padding: 48px;
    box-sizing: border-box;
    text-align: left;
}

form {
    display: block;
    height: 60%;
}

.email-label, .password-label{
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

label {
    display: inline-block;
    margin-top: 45px;
    font-weight: 600;
}

span {
    font-size: 14px;
}

span span {
    margin-left: 6px;
    color: rgba(198, 124, 54, 0.921);
    cursor: pointer;
    font-weight: 600;
}

.email-input, .password-input {
    position: relative;
}

.email-placeholder {
    height: 50px;
    width: 100%;
    border: 1px solid #ced4da;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 12px;
    padding: 14px;
}

.password-placeholder {
    height: 50px;
    width: 100%;
    border: 1px solid #ced4da;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 12px;
    padding: 14px;
}

.password-label span {
    color: rgba(198, 124, 54, 0.921);
    font-weight: 600;
    cursor: pointer;
}

.bottom-box {
    position: relative;
    box-sizing: border-box;
    height: 90px;
    margin-top: 30px;
}

button {
    cursor: pointer;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    font-size: 18px;
    color: white;
    background-color: rgba(198, 124, 54, 0.921);
    border-color: rgba(198, 124, 54, 0.921);
    border-style: none;
}

button:hover {
    background-color: rgba(173, 108, 47, 0.921);
}

.forgot-password {
    margin-top: 20px;
    text-align: center;
}

router-link {
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
}

router-link:hover {
    color: rgba(198, 124, 54, 0.921);
}


</style>