import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { IconsClass } from '../icons.class';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-prompt',
    imports: [MatToolbarModule, MatButtonModule, MatBottomSheetModule, MatIconModule],
    templateUrl: './prompt.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [IconsClass]
})
export class PromptComponent {
  data = inject<{
    mobileType: 'ios' | 'android';
    promptEvent?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}>(MAT_BOTTOM_SHEET_DATA);
  private bottomSheetRef = inject<MatBottomSheetRef<PromptComponent>>(MatBottomSheetRef);

  public installPwa(): void {
    this.data.promptEvent.prompt();
    this.close();
  }

  public close() {
    this.bottomSheetRef.dismiss();
  }
}