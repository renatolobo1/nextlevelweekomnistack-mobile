import React from "react";
import { View, Image, Text} from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from './styles';

function TeacherItem(){
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri:'https://avatars0.githubusercontent.com/u/33937166?s=460&u=26a01f6748c2d7594cd999eca5ba640b0972d72c&v=4' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Renato Lôbo</Text>
          <Text style={styles.subject}>Programação</Text>
        </View>
      </View>
        <Text style={styles.bio}>
          Dando aula de desenvolvimento de software.
          {'\n'}{'\n'}
          Especialista nas tecnologias React (JS e Native), NodeJS e Ruby on Rails.
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>
            Preço/hora {'   '}
            <Text style={styles.priceValue}>R$ 20,00</Text>
          </Text>

          <View style={styles.buttonContainer}>
            <RectButton style={[styles.favoriteButton, styles.favorited]}>
              {/* <Image source={heartOutlineIcon}/> */}
              <Image source={unfavoriteIcon}/>
            </RectButton>

            <RectButton style={styles.contactButton}>
              <Image source={whatsappIcon}/>
              <Text style={styles.contactButtonText}>Entrar em contato</Text>
            </RectButton>
          </View>
        </View>
    </View>
  );
}

export default TeacherItem;