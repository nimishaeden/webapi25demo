import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../data.service';
import { RegistrationComponentComponent } from './registration-component.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import{ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
describe('RegistrationComponentComponent', () => {
  let component: RegistrationComponentComponent;
  let fixture: ComponentFixture<RegistrationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,FormsModule,ReactiveFormsModule,ToastrModule.forRoot(),RouterTestingModule],
      declarations: [ RegistrationComponentComponent ],
      providers:[DataService,
      RegistrationComponentComponent,
    ToastrService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
