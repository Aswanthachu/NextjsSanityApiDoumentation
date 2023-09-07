import {createClient} from "next-sanity";

export const client=createClient({
    projectId:"6i7e6ksb",
    dataset:'production',
    apiVersion:'2021-10-21',
    useCdn:true
})