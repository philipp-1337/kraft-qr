import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import QRCode from 'qrcode';  // Importiere die QRCode-Bibliothek
import { QRCodeErrorCorrectionLevel } from 'qrcode'; // Import the type from the 'qrcode' library
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { NavbarComponent } from './navbar/navbar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { IconsClass } from './icons.class';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [IconsClass]
})
export class AppComponent implements AfterViewInit {
  title = 'kraft-qr';
  qrData = 'https://example.com';  // Default QR Code data
  qrSize = 256;  // Default size
  // Define errorCorrectionLevel with the specific type
  errorCorrectionLevel: QRCodeErrorCorrectionLevel = 'M';  // Default error correction level
  colorDark = '#000000';  // Default dark color
  colorLight = '#ffffff00';  // Default light color

  @ViewChild('canvasElement', { static: false })
  canvasElement!: ElementRef<HTMLCanvasElement>;

  constructor(
    public icons: IconsClass,
  ) {}

  ngAfterViewInit() {
    this.generateQRCode();  // Generate QR Code on component init
  }

  // Generate QR Code based on current inputs
  generateQRCode() {
    const canvas = this.canvasElement.nativeElement;

    // Options for QR Code generation
    const options = {
      errorCorrectionLevel: this.errorCorrectionLevel,
      width: this.qrSize,
      color: {
        dark: this.colorDark,
        light: this.colorLight,
      },
    };

    // Use the QRCode library to draw the QR code on the canvas
    QRCode.toCanvas(canvas, this.qrData, options, (error) => {
      if (error) console.error(error);
      console.log('QR Code generated!');
    });
  }

  // Download the QR Code as an image
  downloadQRCode() {
    const canvas = this.canvasElement.nativeElement;
    const dataUrl = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'qr-code.png';
    link.click();
  }
}
