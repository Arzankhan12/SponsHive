import {configureStore} from '@reduxjs/toolkit';
import LandingPageSlice from '../features/LandingPage/LandingPageSlice'

export const store = configureStore({
    reducer: LandingPageSlice,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: false, // Disable serializability checks
      }),
}) 