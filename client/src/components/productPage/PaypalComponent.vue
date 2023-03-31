<template>
  <div class="payment-success-container" v-if="paid">
    <div class="tick-icon">
      <i class="fa-solid fa-circle-check"></i>
    </div>
    <div class="title">
      Payment Successful!
    </div>
    <div class="line">
      <hr>
    </div>
    <div class="row-container">
      <div>Order Number :</div>
      <div>{{itemCartID}}</div>
    </div>
    <div class="row-container">
      <div>Amount Paid :</div>
      <div>RM {{subtotal}}</div>
    </div>
    <div class="back">
      <div class="button" @click="back()">Back</div>
    </div>
  </div>
  <div class="main-container" v-else>
    <div class="back-button" @click="this.$emit('showPaypal')">
      <i class="fa-solid fa-circle-chevron-left"></i>
    </div>
    <div class="payment-container">
      <div class="paypal" ref="paypal"></div>
    </div>    
  </div>
</template>

<script>
import ItemCartService from "../../services/ItemCartService"
export default {
  props: {
    subtotal: Number,
    itemCartID: Number
  },
  data() {
    return {
      paid: false,
      product: {
        price: this.subtotal,
        description: "Payment for Bakery Shop FYP",
      },
      currentDateTime: null
    };
  },
  mounted() {
    const script = document.createElement("script")
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AZ1ovniRYhyPPiDBkLPX9Zq_eAan_-55r2L_Nna-A6_gcxemkO-DiqYGt9YA6Av5Ppeoy3LJcyV15omS&vault=true&buyer-country=MY&currency=MYR";
    script.addEventListener("load", this.setLoaded)
    document.body.appendChild(script);
  },
  methods: {
    back() {
      location.reload()
    },
    formatDateTime() {
      var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

      if (month.length < 2) 
        month = '0' + month;
      if (day.length < 2) 
        day = '0' + day;

      var currentDateTime = [year, month, day].join('-') + " " + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':')
      this.currentDateTime = currentDateTime
      console.log(this.currentDateTime)
    },
    async completeOrder() {
      this.formatDateTime()
      await ItemCartService.completeOrder({
        itemCartID: this.itemCartID,
        subtotal: this.subtotal,
        orderedAt: this.currentDateTime
      })
    },
    setLoaded() {
      window.paypal
        .Buttons({
          style: {
            color: "silver"
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    value: this.product.price.toFixed(2)
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            await actions.order.capture()
            this.paid = true
            this.completeOrder()
          },
          onError: err => {
            console.log(err)
          }
        })
        .render(this.$refs.paypal)
    }
  }
};
</script>

<style scoped>
.main-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back-button {
  margin-right: 5%;
}

.fa-circle-chevron-left {
  font-size: 40px;
  color: rgb(23, 15, 2);
  background-color: white;
  border-radius: 50%;
  transition: color 0.3s ease, 0.3s background-color ease;
}

.fa-circle-chevron-left:hover {
  cursor: pointer;
  color: white;
  background: black;
  border-color: white;
}

.paypal {
    display: flex;
    justify-content: center;
    align-items: center;
}

.payment-container {
  width: 60%;
}

.payment-success-container {
  width: 500px;
  height: 400px;
  background: white;
  border-radius: 5%;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
}

.tick-icon {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  background: -webkit-linear-gradient(left, #03C6BA, rgb(15, 241, 147));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 60px;
  margin-bottom: 20px;
}

.title {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  background: -webkit-linear-gradient(left, #03C6BA, rgb(15, 241, 147));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.line {
  width: 100%;
  display: flex;
  justify-content: center;
}

hr {
  width: 80%;
  margin-top: 25px;
  margin-bottom: 25px;
  border-top: 1px dashed rgb(152, 152, 152);
}

.row-container {
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  padding-left: 12%;
  padding-right: 12%;
  color: rgb(152, 152, 152);
  margin-bottom: 10px;
}

.back {
  width: 100%;
  display: flex;
  justify-content: center;
}

.button {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 80px;
  border-radius: 4px;
  background: #0089CC;
  color: white;
  box-shadow: 0 3px 10px #8fdafd;
  cursor: pointer;
}
  
.button:active {
  background: #026191;
}

@media (max-width: 550px) {
  .fa-circle-chevron-left {
    font-size: 30px;
  }

  .back-button {
    left: 6%;
  }
}
</style>