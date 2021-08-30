import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { enterWho } from "./RootSlice";

export interface Props {
	id: string;
	who: string;
	onSubmit?: (form: React.FormEvent<HTMLFormElement>) => void;
}


export const Who = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const who = useSelector(state => state.who)
    const { register, handleSubmit } = useForm({ defaultValues: { who } })

    let onSubmit = (data: { who: string; }) => {
        dispatch(enterWho(data.who))
        history.push('./What')
    }

	return (
		<form
			id={id}
			who={cssClasses}
			onSubmit={form => onSubmit && onSubmit(form)}
			noValidate={true}
		>
}