"use client"
import {useEffect} from "react"
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation"
import { useState } from "react";
import qs from "query-string"

const SearchInput = ()=>{
    const router = useRouter();
    const [value, setValue] = useState<string>("");
    const debouncedValue = useDebounce<string>(value, 500)

    useEffect(()=>{
        const query = {
            title: debouncedValue
        }

        const url = qs.stringifyUrl({
            url: '/search',
            query: query
        })
    
        router.push(url);
    }, [debouncedValue, router])

   
    return (
        <input
        className="p-2"
        placeholder="What do you want to listen to ?"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        />
    )
}

export default SearchInput