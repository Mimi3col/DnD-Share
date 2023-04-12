import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  'https://eyuwvhpyxzvjkybnzqla.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5dXd2aHB5eHp2amt5Ym56cWxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzMTIxNjksImV4cCI6MTk5Njg4ODE2OX0.hEqYMiN-pOaC-TNwDeik04fG_0_KKJOpOSYZdkrwSVI'
);