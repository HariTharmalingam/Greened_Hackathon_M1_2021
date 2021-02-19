
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import Avatar from '../../assets/img/bot_blue.svg';

class Review extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        company_name: '',
        plateform: '',
        url: '',
        nb_user: '',
        data: '',
        help: '',
        team_dev: '',
        contact: '',
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { company_name, plateform, url, nb_user, data, help, team_dev, contact } = steps;
  
      this.setState({ company_name, plateform, url, nb_user, data, help, team_dev, contact });
    }
  
    render() {
      const { company_name, plateform, url, nb_user, data, help, team_dev, contact } = this.state;
      return (
        <div style={{ width: '100%' }}>
          <h3>Summary</h3>
          <table>
            <tbody>
              <tr>
                <td>Company Name</td>
                <td>{company_name.value}</td>
              </tr>
              <tr>
                <td>Plateform</td>
                <td>{plateform.value}</td>
              </tr>
              <tr>
                <td>URL</td>
                <td>{url.value}</td>
              </tr>
              <tr>
                <td>Number of Users</td>
                <td>{nb_user.value}</td>
              </tr>
              <tr>
                <td>Data Stocking</td>
                <td>{data.value}</td>
              </tr>
              <tr>
                <td>Needed Help</td>
                <td>{help.value}</td>
              </tr>
              <tr>
                <td>Developper Team</td>
                <td>{team_dev.value}</td>
              </tr>
              <tr>
                <td>Contact</td>
                <td>{contact.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  Review.propTypes = {
    steps: PropTypes.object,
  };
  
  Review.defaultProps = {
    steps: undefined,
  };
  
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'CenturyGothic_Regular',
    headerBgColor: '#168AAD',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#168AAD',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  class GreenedtBot extends Component {
    render() {

      const config = {
        width : "400px",
        height : "400px",
        floating: true
      };

      return (
        <ThemeProvider theme={theme}>
            <ChatBot
            {...config}
            style={{position: 'fixed', bottom: 0, right: 100}}
            botAvatar={Avatar}
            headerTitle={"GreenedBot"}
            placeholder={"Ecrire votre message"}
            steps={[
                {
                id: 'start',
                message: 'Bonjour, je suis GreenedBot, si vous êtes intéressés par nos services, veuillez répondre aux questions suivantes..',
                trigger: '1',
                },
                {
                id: '1',
                message: 'Quel est le nom de votre entreprise ?',
                trigger: 'company_name',
                },
                {
                id: 'company_name',
                user: true,
                trigger: '2',
                },
                {
                id: '2',
                message: 'Enchanté {previousValue} ! Que possède votre entreprise comme plateforme web ?',
                trigger: 'plateform',
                },
                {
                id: 'plateform',
                options: [
                    { value: 'website', label: 'Site web', trigger: '3' },
                    { value: 'app', label: 'Appli', trigger: '3' },
                    { value: 'both', label: 'Les deux', trigger: '3' },
                ],
                },
                {
                id: '3',
                message: 'Insérez l’url de votre plateforme web',
                trigger: 'url',
                },
                {
                id: 'url',
                user: true,
                trigger: '4',
                },
                {
                id: '4',
                message: 'Combien d’utilisateurs consultent votre(vos) plateforme(s) mensuellement en moyenne ?',
                trigger: 'nb_user',
                },
                {
                    id: 'nb_user',
                    options: [
                        { value: '<2000', label: 'Moins de 2000', trigger: '5' },
                        { value: '[2000 - 50000]', label: 'De 2000 à 50 000', trigger: '5' },
                        { value: '>5000', label: 'Plus de 50 000', trigger: '5' },
                        { value: '?', label: 'Je ne sais pas', trigger: '5' },
                    ],
                },
                {
                id: '5',
                message: 'Stockez vous des données sur votre plateforme web ? (Compte, cookies…)',
                trigger: 'data',
                },
                {
                id: 'data',
                options: [
                    { value: 'yes', label: 'Oui', trigger: '6' },
                    { value: 'no', label: 'Non', trigger: '6' },
                ],
                },
                {
                id: '6',
                message: 'Comment peut-on vous aider ?',
                trigger: 'help',
                },
                {
                id: 'help',
                options: [
                    { value: 'RGPD', label: 'Conseils sur la mise en place de la RGPD ', trigger: '7' },
                    { value: 'Conseils', label: 'Conseils sur la diminution écologique de votre plateforme ', trigger: '7' },
                    { value: 'Audit', label: 'Audit sur votre plateforme', trigger: '7' },
                    { value: 'Plan', label: 'Mise en place de plan d’actions pour vous aider', trigger: '7' },
                    { value: 'Suivi', label: 'Suivi tout au long de votre projet', trigger: '7' },   
                ],
                },
                {
                id: '7',
                message: 'Vous pouvez désormais nous laisser votre contact.',
                trigger: 'contact',
                },
                {
                    id: 'contact',
                    user: true,
                    trigger: '8',
                },
                {
                  id: '8',
                  message: 'Merci. Vos informations ont bien étés pris en compte ! Nous reviendrons vers vous très bientôt !',
                  end: true,
                  },
            ]}
            />
        </ThemeProvider>
      );
    }

  }
  

export default GreenedtBot;