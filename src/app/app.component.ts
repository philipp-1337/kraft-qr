import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import QRCode from 'qrcode';  // Importiere die QRCode-Bibliothek
import { QRCodeErrorCorrectionLevel } from 'qrcode'; // Import the type from the 'qrcode' library
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs/operators';

import { NavbarComponent } from './navbar/navbar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { MtxColorpickerModule } from '@ng-matero/extensions/colorpicker';

import { IconsClass } from './icons.class';
import { PwaService } from './pwa.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MtxColorpickerModule,
    MatBottomSheetModule,
    NavbarComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  providers: [IconsClass]
})
export class AppComponent implements AfterViewInit, OnInit {

  qrData = 'https://qr.changekraft.de';  // Default QR Code data
  qrSize = 512;  // Default size
  // Define errorCorrectionLevel with the specific type
  errorCorrectionLevel: QRCodeErrorCorrectionLevel = 'M';  // Default error correction level
  colorDark = '#ffb787';  // Default dark color
  colorLight = '#004f4f';  // Default light color

  @ViewChild('canvasElement', { static: false })
  canvasElement!: ElementRef<HTMLCanvasElement>;

  constructor(
    public icons: IconsClass,
    private swUpdate: SwUpdate,
    private snackBar: MatSnackBar,
    private pwaService: PwaService

  ) { }

  ngOnInit(): void {
    // Initialisiere die PWA-Aufforderung
    this.pwaService.initPwaPrompt();

    // Prüfe, ob der Service Worker aktiviert ist
    if (this.swUpdate.isEnabled) {
      // Abonniere das versionUpdates Observable
      this.swUpdate.versionUpdates
        .pipe(
          filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY') // Filtere nach VERSION_READY Ereignissen
        )
        .subscribe(() => {
          // Wenn ein Update gefunden wird, zeige das Banner an
          this.showUpdateSnackBar();
        });
    }
  }

  // Zeige eine Snackbar, die auf ein Update hinweist
  showUpdateSnackBar(): void {
    const snackBarRef = this.snackBar.open('Es ist ein Update verfügbar.', 'Aktualisieren', {
      duration: 17000, // Zeigt die Snackbar für 17 Sekunden an
    });

    // Reagiere auf den Klick des Nutzers auf 'Neu laden'
    snackBarRef.onAction().subscribe(() => {
      this.reloadApp();
    });
  }

  // Funktion, um die Anwendung neu zu laden
  reloadApp(): void {
    window.location.reload();
  }

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