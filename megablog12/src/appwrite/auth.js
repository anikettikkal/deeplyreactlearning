import conf from '../conf.js'
import {Client, Account, ID} from 'appwrite'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUel)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAcccount({email, password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email, password, name);
            if(userAccount){
                // call another method
                return this.login({email,password});

            } else {
                return userAccount;

            }
        } catch (error){
            throw error;
        }
    }

    async login({email,password}){
        try{
           return await this.account.createEmailSession
        } catch (error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        } catch(error){
            throw error;
        }

        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSessions('current');
        } catch(error){
            throw error;
        }
    }
}

const authService = new AuthService();


export default AuthService