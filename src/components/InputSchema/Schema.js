// import React from 'react'
import * as Yup from 'yup'

const Schema = Yup.object().shape({
    groupid: Yup.string(),
    groupname: Yup.string()
        .max(30, "Must be less than 30 characters")
        .required('Required'),
    groupdescription: Yup.string().max(320, "Must be less than 320 characters"),
    groupimg: Yup.mixed(),

    cards: Yup.array().of(Yup.object().shape({
        cardid: Yup.string(),
        cardname: Yup.string()
            .max(20, 'Must be less than 20 characters')
            .required('Required'),
        carddescription: Yup.string()
            .max(320, "Must be less than 320 characters")
            .required('Required')
    })),
    createdOn: Yup.date().default(() => new Date())

})

export default Schema
