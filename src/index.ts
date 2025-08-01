import 'intl-tel-input/build/css/intlTelInput.css';
import './index.css';
import intlTelInput from 'intl-tel-input';
import Alpine from 'alpinejs';
import axios from 'axios';
// @ts-ignore
import bg1 from './bg1.png';


window.intlTelInput = intlTelInput;

window.Alpine = Alpine;

const formatPhoneNumber = () => {
    const input = document.querySelector("#phoneNumber") as HTMLInputElement;
    const iti = window.intlTelInputGlobals.getInstance(input);
    const number = iti.getNumber();
    return number;
}

Alpine.data('phoneInput', function () {
    return {
        init() {
            const input = document.querySelector("#phoneNumber");
            if (input) {
                intlTelInput(input, {

                    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/20.0.5/js/utils.min.js",
                    initialCountry: "tz",
                    onlyCountries: ["tz"],
                    // @ts-ignore
                    showSelectedDialCode: true,

                });
            }
            console.log("Loaded contries for phoneInput");
        },
        getFormatedPhoneNumber: formatPhoneNumber
    }
});

type PhoneOTPData = {
    $store: {
        phoneOtp: {
            attemptedPhoneActivated: boolean,
            attemptedPhoneNumber: string,
            sendVerificationCode: string,
            requiredPhoneNumber: any,
            realmName: string,
            type: 'login' | 'registration'
        }
    }
}

Alpine.data("phoneOtp", function (
    this: PhoneOTPData) {

    const { attemptedPhoneActivated, realmName, type, attemptedPhoneNumber, sendVerificationCode, requiredPhoneNumber } = this.$store.phoneOtp;
    console.log(this.$store.phoneOtp);
    
    return {
        errorMessage: '',
        freezeSendCodeSeconds: 0,
        phoneActivated: attemptedPhoneActivated ? true : false,
        phoneNumber: attemptedPhoneNumber,
        realm: realmName,
        sendButtonText: sendVerificationCode,
        initSendButtonText: sendVerificationCode,
        req: function (phoneNumber: string) {
            const params = { params: { phoneNumber } }
            let url = `/realms/${this.realm}/sms/authentication-code`;
            if (type === 'registration') {
                url = `/realms/${this.realm}/sms/registration-code`;
            }
            axios.get(window.location.origin + url, params)
                .then(res => this.disableSend(res.data.expires_in))
                .catch(e => this.errorMessage = e.response.data.error);
        },
        disableSend: function (seconds: number) {
            if (seconds <= 0) {
                this.sendButtonText = this.initSendButtonText;
            } else {
                const minutes = Math.floor(seconds / 60) + '';
                const seconds_ = seconds % 60 + '';
                this.sendButtonText = String(minutes.padStart(2, '0') + ":" + seconds_.padStart(2, '0'));
                setTimeout(() => {
                    this.disableSend(seconds - 1);
                }, 1000);
            }
        },
        sendVerificationCode: function () {
            
            const phoneNumber = formatPhoneNumber()
            if (!phoneNumber) {
                console.log("Phone number not provided - skipping verification");
                return;
            }
            console.log("Sending verification code ... to ", phoneNumber);
            if (this.sendButtonText !== this.initSendButtonText) {
                return;
            }
            this.req(phoneNumber);
        }
    }
});




Alpine.start();
