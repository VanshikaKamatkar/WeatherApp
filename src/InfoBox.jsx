import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox ({info}) {

    const INIT_URL = "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNsb3VkeXxlbnwwfHx8fDE2NzU0NDI1MTM&ixlib=rb-1.2.1&q=80&w=1080";

    const HOT_URL = "https://images.unsplash.com/photo-1710578626081-4fe26c6081ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VtbWVyJTIwY2xpbWF0ZXxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1517362302400-873b4e30f5c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGQlMjBjbGltYWV0ZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1321878632/photo/cloudy-sky-over-beautiful-flood-plain-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=IEX0DCeEeWnkakFc1jQxI0oujXoMcU-AD38SP3g08R0=";
         

    return(
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image= {info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>
                        Temperature = {info.temp}&deg;C
                    </p>
                    <p>
                        Humidity = {info.humidity}
                    </p>
                    <p>
                        Min Temperature = {info.tempMin}
                    </p>
                    <p>
                        Max Temperature = {info.tempMax}
                    </p>
                    <p>
                        The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                    </p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}