import React from "react";
import { Grid, Card, makeStyles, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import {LineChart,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';


function Home(){

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

    return(
<div>
  <div style={{height:"100px"}}><Typography color="textPrimary" gutterBottom variant="h4" >Dashboard</Typography>
  </div>

  <Grid container spacing={4} >
<Grid item xs={3}>
    <Card style={{backgroundColor: "red"}}><CardContent>
          <Grid container justify="space-between">
            <Grid item xs={4}>
              <Typography color="textPrimary" gutterBottom variant="h6" >
               Sales
              </Typography>
              <Typography variant="h3">
              $1Million
              </Typography>
              </Grid>
          </Grid>
                </CardContent>
              </Card>
  </Grid>
  
          
  <Grid item xs={3} >
    <Card style={{backgroundColor: "green"}}><CardContent>
          <Grid container justify="space-between">
            <Grid item xs={2}>
              <Typography color="textPrimary" gutterBottom variant="h6">
              Profit
              </Typography>
              <Typography variant="h3">
              $200,000
              </Typography>
              </Grid>
          </Grid>
                </CardContent>
              </Card>
  </Grid>
  <Grid item xs={2.5}>
    <Card style={{backgroundColor: "yellow"}}><CardContent>
          <Grid container justify="space-between">
            <Grid item xs={3}>
              <Typography color="textPrimary" gutterBottom variant="h6" >
               Cost
              </Typography>
              <Typography variant="h3">
              $800,000
              </Typography>
              </Grid>
          </Grid>
                </CardContent>
              </Card>
  </Grid>




  <Grid item xs={3}>
    <Card style={{backgroundColor: "blue"}}><CardContent>
          <Grid container justify="space-between">
            <Grid item xs={3}>
              <Typography color="textPrimary" gutterBottom variant="body2">
               Percent
              </Typography>
              <Typography variant="h3" align="center">
                43%
              
              </Typography>
              </Grid>
          </Grid>
                </CardContent>
              </Card>
  </Grid>
</Grid>

<div style={{height:"100px"}}></div>
<Grid container spacing={2} >

         <Grid xl={6}>
            <ResponsiveContainer width="100%" aspect={2.5}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>

            </Grid>
            <Grid xl={5}>


            <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
            </Grid>
</Grid>
            

          
 



</div>
    )
}

export default Home;