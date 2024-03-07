'use client'
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { MdOutlineAutoFixNormal } from "react-icons/md";
import { MdDone } from "react-icons/md";

export default function Home() {
  const todoTitle = useRef<any>('');


    const {mutate :CreateTodo, mutateAsync} = useMutation({
      mutationFn : async() => await fetch('api/createTodo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: todoTitle.current.value
        })
      }),
      onSuccess : () => {
        console.log('finallyy')
      },
      onError : () => {
        console.log('error')
      }
    })

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold text-4xl text-orange-500">Add todo to list</h1>
      <div className="flex w-fit px-4 h-fit py-4 mt-4">
      <input
        type="text"
        ref={todoTitle}
        placeholder="add todo"
        className="w-96 h-10 rounded-l-md outline-none px-2 border-[2px] border-orange-600"
      />
      <button 
      className="w-28 h-10 bg-orange-600 text-white rounded-r-md"
      onClick={() => CreateTodo()}
      >Submit</button>
      </div>
      <div className="w-[600px] min-h-screen flex flex-col gap-6 px-5 pt-9">
        <div className="w-full h-32 bg-gray-200 border-[1px] border-orange-500 shadow-xl shadow-orange-400 rounded-lg p-3 px-7 flex flex-col items-center justify-between">
          <div className="flex items-center w-full justify-between">
            <h2 className="font-bold text-orange-500 text-2xl drop-shadow-md shadow-orange-300">SADWASDWASD SADWIA S</h2>     
            <MdOutlineAutoFixNormal className="text-orange-600 text-3xl cursor-pointer"/>
          </div>
          <div className="flex w-full items-center justify-between">
        <FaTrash className="text-red-600 text-1xl cur cursor-pointer"/>
        <MdDone className="text-green-900 text-3xl cur cursor-pointer"/>
        </div>

          </div>
      </div>
    </main>
  );
}