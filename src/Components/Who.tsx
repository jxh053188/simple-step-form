import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, RootStateOrAny} from "react-redux";
import { useHistory } from "react-router-dom";
import { enterWho } from "../RootSlice";
import { TextField, Button, Card, CardContent } from "@material-ui/core";
import { RootState } from "../Store";

export const Who = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const who = useSelector((state: {who: string}) => state.who)
	const { register, handleSubmit } = useForm({ defaultValues: { who } })

	const onSubmit = (data: { who: string; }) => {
		dispatch(enterWho(data.who))
		console.log(who)
		history.push("/what")
	}

	return (
		<div className="flex-container">
			<Card className="survey">
				<CardContent>
					<p>Who do you want to tell a story about?</p>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label htmlFor="who"></label>
						<TextField
							className="answer-box"
							required
							id="who"
							label="Enter a Name"
							variant="outlined"
							{...register('who', { required: true })}

						/>
						<div className="button-container">
							<Button type="submit">Next</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)

}