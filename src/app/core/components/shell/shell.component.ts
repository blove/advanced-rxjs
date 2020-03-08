import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Mode } from '@app-core/enums';
import { SettingsFacade } from '@app-state/settings';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  /** An enum of possible application modes. */
  Mode = Mode;

  /** The application display mode. */
  mode: Observable<Mode> = this.settingsFacade.mode$.pipe(
    tap(mode => {
      if (this.document.body) {
        this.document.body.classList.remove(Mode.Dark);
        this.document.body.classList.remove(Mode.Light);
        this.document.body.classList.add(mode);
      }
    })
  );

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly matDialog: MatDialog,
    private readonly settingsFacade: SettingsFacade
  ) {}

  onDarkMode(): void {
    this.settingsFacade.setMode(Mode.Dark);
  }

  onLightMode(): void {
    this.settingsFacade.setMode(Mode.Light);
  }

  onToggleMenu(): void {
    // this.matDialog.open(MenuDialogComponent);
  }
}
