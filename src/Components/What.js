import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { enterWhat } from "../RootSlice";
import { TextField, IconButton } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";

export const What = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const what = useSelector(state => state.what)
    const { register, handleSubmit } = useForm({ defaultValues: { what } })

    const onSubmit = (data) => {
        dispatch(enterWhat(data.what))
        history.push('./result')
    }

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="what"></label>
			<TextField
          		required
          		id="what"
          		label="What"
          		defaultValue=""
          		variant="outlined"
				/>
			<IconButton aria-label="next" className="next-button">
          		<NavigateNext fontSize="large" />
        	</IconButton>
			</div>
		</form>
	)
}