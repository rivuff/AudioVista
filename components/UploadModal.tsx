"use client"

import useUploadModal from "@/hooks/useUploadModal"
import Modal from "./Modal"
import { useForm , FieldValues, SubmitHandler} from "react-hook-form";

const UploadModal = ()=>{
    const uploadModal = useUploadModal();

    const { 
        register,
        handleSubmit,  
        reset
    } = useForm<FieldValues>({
        defaultValues:{
            author: '',
            title: '',
            song: null,
            image: null
        }
    })

    const onChange = (open: boolean)=>{
        if(!open){
            reset();
            uploadModal.onClose();
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async(values)=>{
        //upload to supabase
    }
    
    return(
        <Modal
        title= "Add a song"
        description="Upload mp3"
        isOpen = {uploadModal.isOpen}
        onChange={onChange}
        >
        <form
        onSubmit={handleSubmit(onSubmit)}
        >
            <input
            />
        </form>
        </Modal>
    )
}
export default UploadModal;