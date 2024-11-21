import { Grid } from '@mui/material'
import React from 'react'

const OrederCard = () => {
    return (
        <div>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img
                            className="w-[5rem] h-[5rem] object-cover object-top"
                            src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                            alt="Men Slim Mid Rise Black Jeans"
                        />
                        <div className="ml-5 space-y-2">
                            <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                            <p className="opacity-50 text-xs font-semibold">Size: M</p>
                            <p className="opacity-50 text-xs font-semibold">Color: Black</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>

    )
}

export default OrederCard