import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnternamenProfilPage } from './unternamen-profil.page';

describe('UnternamenProfilPage', () => {
  let component: UnternamenProfilPage;
  let fixture: ComponentFixture<UnternamenProfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnternamenProfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnternamenProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
