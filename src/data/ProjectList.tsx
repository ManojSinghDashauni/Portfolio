import { Gemini,blog,country,desert,ecom,note,tictactoe } from "../assets/projects/Index"

function id(){
    return Math.ceil(Math.random() *1000)
}

export const ProjectList = [
    {
        id:id(),
        projectTitle:"Product list - ecom",
        projectSrc : desert,
        projectLink : "https://framer-motion-award-o1eu.vercel.app/"
    },
    {
        id:id(),
        projectTitle:"Recipe List Generator with gemini",
        projectSrc : Gemini,
        projectLink : "https://30-recipe-list-with-gemini.vercel.app/"
    },
    {
        id:id(),
        projectTitle:"Product list - ecom",
        projectSrc : desert,
        projectLink : "https://20-product-list.vercel.app/"
    },
    {
        id:id(),
        projectTitle:"Country api",
        projectSrc : country,
        projectLink : "https://22-country-api-rjtz.vercel.app/"
    },
    {
        id:id(),
        projectTitle:"CMS headless Ecommerce website",
        projectSrc : ecom,
        projectLink : "https://shop-store-nu.vercel.app/"
    },
    {
        id:id(),
        projectTitle:"Sanity based Blog upload website",
        projectSrc : blog,
        projectLink : "https://blackman-gray.vercel.app/"
    },
    {
        id:id(),
        projectTitle:"Daily Planner with authentication",
        projectSrc : note,
        projectLink : "https://29-todo.vercel.app/"
    },
    {
        id:id(),
        projectTitle:"Tic-Tac-Toe",
        projectSrc : tictactoe,
        projectLink : "https://02-typescript-tic-tac-toe.vercel.app/"
    },
    
]