import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UploadFileComponent } from './upload-file-component';
import { ServiceFiles } from '../../services/service.files';

describe('UploadFileComponent', () => {
  let component: UploadFileComponent;
  let fixture: ComponentFixture<UploadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadFileComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: ServiceFiles,
          useValue: { uploadFileAsync: vi.fn() },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadFileComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
