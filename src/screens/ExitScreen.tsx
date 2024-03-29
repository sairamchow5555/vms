import React from 'react';
import { Alert, Button, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const QRScan: React.FC<Props> = ({ navigation }) => {
  const onBarcodeScanned = (event: any) => {
    const scannedTime = new Date().toLocaleString(); // Capture the current time when QR code is scanned
    if (event.data) {
      // Alert.alert('Barcode Scanned', event.data);
      Alert.alert('Barcode Scanned', `Data: ${event.data}\nScanned Time: ${scannedTime}`);
    } else {
      Alert.alert('Error', 'Failed to read barcode.');
    }
  };

  return (
    <QRCodeScanner
      onRead={onBarcodeScanned}
      showMarker={true}
      reactivate={true}
      reactivateTimeout={5000}
      bottomContent={
        <Button
          title='Home'
          onPress={() => navigation.navigate('HomeScreen')}
        />
      }
    />
  );
};

const styles = StyleSheet.create({});

export default QRScan;
