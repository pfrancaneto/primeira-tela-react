import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  content: {
    display: 'flex',
    alignItems: 'center'
  },

  infoOne: {
    display: 'flex',
    alignItems: 'center'
  },

  title: {
    fontSize: 16,
    fontWeight: 400,
    color: '#343434'
  },

  fullName: {
    fontSize: 16,
    fontWeight: 700,
  },

  chip: {
    backgroundColor: '#C79CE8',
    color: '#7B4C90',
    fontWeight: 500,
    fontSize: 16,
    width: 71,
    height: 36,
    borderRadius: 16,
    marginLeft: 36,
  },

  infoTwo: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 115,
  },

  infoCota: {
    paddingRight: 50,
  },

  grupoCotaVersao: {
    fontSize: 16,
    fontWeight: 400,
    color: '#343434'
  },

  numberGrupoCotaVersao: {
    fontSize: 16,
    fontWeight: 700,
  },

  infoCpf: {
    paddingRight: 70,
  },

  numberCpf: {
    fontSize: 16,
    fontWeight: 700,
    color: '#343434'
  },

  information: {
    fontSize: 16,
    fontWeight: 700,
    color: '#0D3C61',
  }

  
});

export default function SimpleCard() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.infoOne}>
          <div>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Nome
            </Typography>
            <Typography className={classes.fullName} variant="h5" component="h2">
              ALBERTO SILVA NETO
            </Typography>
          </div>
          <Chip className={classes.chip} size="small" label="PEP"/>
        </div>

        <div className={classes.infoTwo}>

          <div className={classes.infoCota}>
            <Typography className={classes.grupoCotaVersao} color="textSecondary" gutterBottom>
              Grupo/Cota - Versão
            </Typography>
            <Typography className={classes.numberGrupoCotaVersao} variant="h5" component="h2">
              06020/0018-00
            </Typography>
          </div>

          <div className={classes.infoCpf}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              CPF
            </Typography>
            <Typography className={classes.numberCpf} variant="h5" component="h2">
              021.038.768-15
            </Typography>
          </div>

          <div>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Pessoa importante
            </Typography>
            <Typography className={classes.information} variant="h5" component="h2">
              DIRETOR DO CONSÓRCIO
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

