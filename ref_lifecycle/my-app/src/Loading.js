import React from 'react';
import { Oval } from 'react-loader-spinner'

export default function Loading() {
    return (
        <Oval
            height={80}
            width={80}
            color="#5e5eff"
            wrapperStyle={{}}
            wrapperClass="oval-loading"
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#5e5eff"
            strokeWidth={2}
            strokeWidthSecondary={2}
        />
    )
}
