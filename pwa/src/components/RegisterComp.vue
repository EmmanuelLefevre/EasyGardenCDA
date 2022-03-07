<script lang="ts">
import type { IRegister } from "@/types/IRegister"
export default class RegisterComp {
    private IR:IRegister = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        pseudo: '',
        phoneNumber: ''
    }
    private CP:string = ''
}
</script>

<template>
    <div>
        <form>
            <input 
                type="lastname"
                name="lastname"
                vmodel="IR.lastName"
                placeholder="Nom"
            >        
            <input 
                type="firstname"
                name="firstname"
                vmodel="IR.firstName"
                placeholder="Prénom"
            >
            <input 
                type="email"
                name="email"
                vmodel="IR.email"
                placeholder="Email"
            >
            <input 
                type="password"
                name="password"
                vmodel="IR.password"
                placeholder="Mot de passe"
            >
            <input 
                type="password"
                name="passwordconfirm"
                vmodel="CP"
                placeholder="Confirmez le mot de passe"
            >
            <input 
                type="pseudo"
                name="pseudo"
                vmodel="IR.pseudo"
                placeholder="Pseudo"
            >
            <input 
                type="tel"
                name="phonenumber"
                vmodel="IR.phoneNumber"
                placeholder="Téléphone"
            >
        </form>
    </div>
</template>
