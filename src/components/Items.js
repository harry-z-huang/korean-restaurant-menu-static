import React from 'react';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';

const Items = (props) => {
    return (
        <Card sx={{ minWidth: 250 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={props.image}
                title={props.name}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="productTitle"
                >
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${props.price}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Items;