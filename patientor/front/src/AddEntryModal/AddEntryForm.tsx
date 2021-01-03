import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Field, Formik, Form } from "formik";
import {NumberField, DiagnosisSelection, TextField, EntryTypeOption, SelectFieldEntryType } from '../AddPatientModal/FormField'
import {Entry, EntryType} from '../types'
import { useStateValue } from "../state";



export type EntryFormValues = Omit<Entry, "id" | "type">;


interface Props {
    onSubmit: (values: EntryFormValues) => void;
    onCancel: () => void;
  }

const entryTypeOptions :EntryTypeOption[] = [
    { value: EntryType.HealthCheck , label: "Healthcheck" },
    { value: EntryType.Hospital , label: "Hospital" },
    { value: EntryType.OccupationalHealthcare , label: "Occupational Healthcare" }
] 

export const AddEntryForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
    const [{ diagnosesList }] = useStateValue();

    return (
            <Formik 
                    initialValues={{
                        type: "null" ,
                        description: "",
                        date: "",
                        specialist: "",
                        diagnosisCodes: [],
                        discharge: { date: "", criteria: "" },
                        healthCheckRating: 0,
                        employerName: "",
                        sickLeave: {startDate:"", endDate:""},
                    }}
                    onSubmit={onSubmit}
                    validate={values => {
                        const requiredError = "Field is required";
                        let errors:
                        | { [field: string]: string }
                        | { [key: string]: {
                                            [key: string]: string;
                                            };
                          } = {};
                        if (!values.description) {
                          errors.description = requiredError;
                        }
                        if (!values.date) {
                          errors.date = requiredError;
                        }
                        if (!values.specialist) {
                          errors.specialist = requiredError;
                        }
                        if(values.type === "null"){
                            errors.type = "null"
                        }
                        if(values.type === "Hospital" && !values.discharge.date){
                            errors = {...errors,
                                discharge: {
                                    date: requiredError
                                }        
                            }
                        }
                        if(values.type === "Hospital" && !values.discharge.criteria){
                            errors = {...errors,
                                discharge: {
                                    criteria: requiredError
                                }        
                            }
                        }
                        if(values.type === "Hospital" && !values.discharge.criteria && !values.discharge.date){
                            errors = {...errors,
                                discharge: {
                                    date: requiredError,
                                    criteria: requiredError
                                }        
                            }
                        }
                        if(values.type === "HealthCheck" && (values.healthCheckRating < 0 || values.healthCheckRating > 3)){
                            errors.healthCheckRating = "Healthcheck value must be either 0, 1, 2 or 3 !"
                        }
                        if(values.type === "OccupationalHealthcare" && !values.employerName){
                            errors.employerName = requiredError
                        }
                        if(values.type === "OccupationalHealthcare" && !values.sickLeave.startDate ){
                            errors = {
                                ...errors,
                                sickLeave: {
                                    startDate: requiredError
                                }
                            }
                        }
                        if(values.type === "OccupationalHealthcare" && !values.sickLeave.endDate){
                            errors = {
                                ...errors,
                                sickLeave: {
                                    endDate: requiredError
                                }
                            }
                        }
                        if(values.type === "OccupationalHealthcare" && !values.sickLeave.startDate && !values.sickLeave.endDate){
                            errors = {
                                ...errors,
                                sickLeave: {
                                    startDate: requiredError,
                                    endDate: requiredError
                                }
                            }
                        }
                        return errors;
                      }}
            >
            {({ isValid, dirty, setFieldValue, setFieldTouched, values, errors})=>{
                return(
                    <Form className="form ui">
                        <SelectFieldEntryType label="Entry type" name="type" options={entryTypeOptions}/>
                        <div style={{color:'red'}}>
                            {errors.type === "null" ? <p>Please select an entry type!</p> : null}
                        </div>
                        <Field label="Description" placeholder="Description" name="description" component={TextField}/>
                        <Field label="Date" placeholder="YYYY-MM-DD" name="date" component={TextField}/>
                        <Field label="Specialist" placeholder="Specialist" name="specialist" component={TextField}/>
                        <DiagnosisSelection setFieldValue={setFieldValue} setFieldTouched={setFieldTouched} diagnoses={Object.values(diagnosesList)}/>
                        {values.type === "Hospital"?
                                                    [
                                                        <Field key="dischargeDate" label="Discharge Date" placeholder="YYYY-MM-DD" name="discharge.date" component={TextField}/>,
                                                        <Field key="dischargeCriteria" label="Discharge Criteria" placeholder="YYYY-MM-DD" name="discharge.criteria" component={TextField}/>
                                                    ] 
                                                    : null
                        }
                        {values.type === "HealthCheck" ? 
                                                        <Field label="Health check rating" name="healthCheckRating" component={NumberField} min={0} max={3}/>
                                                        : null
                        }
                        {values.type === "OccupationalHealthcare" ?
                                                                    [
                                                                        <Field key="employerName" label="Employer name" placeholder="Employer name" name="employerName" component={TextField}/>,
                                                                        <Field key="sickLeaveStartDate" label="Sick leave start date" placeholder="YYYY-MM-DD" name="sickLeave.startDate" component={TextField}/>,
                                                                        <Field key="sickLeaveEndDate" label="Sick leave end date" placeholder="YYYY-MM-DD" name="sickLeave.endDate" component={TextField}/>
                                                                    ]
                                                                   : null
                        }
                        <Grid>
                            <Grid.Column floated="left" width={5}>
                                <Button type="button" onClick={onCancel} color="red">Cancel</Button>
                            </Grid.Column>
                            <Grid.Column floated="right" width={5}>
                                <Button type="submit" floated="right" color="green" disabled={!dirty || !isValid}>Add</Button>
                            </Grid.Column>
                        </Grid>
                    </Form>
                )
            }}

            </Formik>
    )
}

export default AddEntryForm