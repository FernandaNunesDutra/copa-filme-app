import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieResultComponent } from './movie-result.component';
import { MovieService } from 'src/app/services/movie-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router'; 
import { RouterTestingModule } from '@angular/router/testing';

describe('MovieResultComponent', () => {
  let component: MovieResultComponent;
  let fixture: ComponentFixture<MovieResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieResultComponent],
      providers: [
        MovieService,
      ],
      imports: [
        RouterModule.forRoot([]),
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
